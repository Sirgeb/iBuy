import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Shop } from "src/shops/entities/shop.entity";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { CreateItemInput, CreateItemOutput } from "./dtos/create-item.dto";
import { DeleteItemInput, DeleteItemOutput } from "./dtos/delete-item.dto";
import { GetItemInput, GetItemOutput } from "./dtos/get-item.dto";
import { GetItemsInput, GetItemsOutput } from "./dtos/get-items.dto";
import { UpdateItemInput, UpdateItemOutput } from "./dtos/update-item.dto";
import { Item } from "./entities/item.entity";

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly items: Repository<Item>,
    @InjectRepository(Shop) private readonly shops: Repository<Shop>
  ){}

  async createItem(
    owner: User,
    createItemInput: CreateItemInput
  ): Promise<CreateItemOutput> {
    try {
      const shop = await this.shops.findOne({
        id: createItemInput.shopId
      });
      if (!shop) {
        return {
          ok: false, 
          error: 'Shop not found'
        }
      }
      if (owner.id !== shop.ownerId) {
        return {
          ok: false,
          error: 'You don\'t have privilege to do this'
        }
      }
      delete createItemInput.shopId;
      const newItem = await this.items.save(
        this.items.create({
          ...createItemInput,
          shop
        })
      )
      return {
        ok: true,
        item: newItem
      }
    } catch(error) {
      return {
        ok: false, 
        error: 'Could not create item'
      }
    }
  }

  async getItem(
    { itemId }: GetItemInput
  ): Promise<GetItemOutput> {
    try {
      const item = await this.items.findOne({ id: itemId });
      if (!item) {
        return {
          ok: false, 
          error: 'item not found'
        }
      } 
      return {
        ok: true,
        item
      }
    } catch {
      return {
        ok: false,
        error: 'Could not find item'
      }
    }
  }

  async getItems(
    { search, category, price, brand, discount, page, limit }: GetItemsInput
  ): Promise<GetItemsOutput> {
    try {
      const query = this.items.createQueryBuilder('item');
      let numberOfItemsFound: number;  

      if (!search && !category && !price && !brand && !discount) {
        numberOfItemsFound = await query.getCount();
        const itemsFound: Item[] = await query.skip((page - 1) * limit).take(limit).getMany();

        return {
          ok: true,
          totalPages: Math.ceil(numberOfItemsFound / limit),
          totalResults: numberOfItemsFound,
          items: itemsFound
        }
      }
      
      if (category) {
        query.andWhere('item.category = :category', { category });
      }
      
      if (brand) {
        query.andWhere('item.brand = :brand', { brand });
      }
      
      if (search) {
        query.andWhere('item.name ILIKE :search OR item.brand ILIKE :search OR item.category ILIKE :search ', { search: `%${search}%`});
      }

      if (price && discount) {
        query.orderBy("item.price", price).addOrderBy("item.discountPercent", discount);
      }

      if (price) {
        query.orderBy("item.price", price)
      }

      if (discount) {
        query.orderBy("item.discountPercent", discount)
      }

      numberOfItemsFound = await query.getCount();
      const itemsFound: Item[] = await query.skip((page - 1) * limit).take(limit).getMany()

      return {
        ok: true,
        totalPages: Math.ceil(numberOfItemsFound / limit),
        totalResults: numberOfItemsFound,
        items: itemsFound
      }
    } catch {
      return {
        ok: false,
        error: 'No items found'
      }
    }
  }

  async updateItem(
    owner: User,
    updateItemInput: UpdateItemInput
  ): Promise<UpdateItemOutput> {
    const { itemId } = updateItemInput;
    try {
      const item = await this.items.findOne({ id: itemId }, {
        relations: ['shop']
      });
      if (!item) {
        return {
          ok: false,
          error: 'Item not found'
        }
      }
      if (item.shop.ownerId !== owner.id) {
        return {
          ok: false,
          error: 'You don\'t have privilege to do this'
        }
      }
      delete updateItemInput.itemId;
      const [updatedItem] = await this.items.save(
        [
          {
            id: itemId,
            ...updateItemInput
          }
        ]
      )
      return {
        ok: true,
        item: updatedItem
      }
    } catch {
      return {
        ok: false,
        error: 'Could not update item',
      };
    }
  }

  async deleteItem(
    owner: User,
    { itemId }: DeleteItemInput
  ): Promise<DeleteItemOutput> {
    try {
      const item = await this.items.findOne({ 
        where: {
          id: itemId 
        },
        relations: ['shop']
      });
      if (!item) {
        return {
          ok: false,
          error: 'Item not found'
        }
      }
      if (item.shop.ownerId !== owner.id) {
        return {
          ok: false,
          error: 'You don\'t have privilege to do this'
        }
      }
      await this.items.delete({ id: itemId });
      return {
        ok: true,
        item
      }
    } catch {
      return {
        ok: false,
        error: 'Could not delete item'
      }
    }
  }
}
