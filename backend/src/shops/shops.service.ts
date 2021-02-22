import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateShopInput, CreateShopOutput } from './dtos/create-shop.dto';
import { DeleteShopInput, DeleteShopOutput } from './dtos/delete-shop.dto';
import { UpdateShopInput, UpdateShopOutput } from './dtos/update-shop.dto';
import { FindShopInput, FindShopOutput } from './dtos/find-shop.dto';
import { MyShopsOutput } from './dtos/my-shops.dto';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop) private readonly shops: Repository<Shop>
  ) {}

  async createShop(
    owner: User,
    createShopInput: CreateShopInput
  ): Promise<CreateShopOutput> {
    try {
      const shopNameExist = await this.shops.findOne({ name: createShopInput.name });
      if (shopNameExist) {
        return {
          ok: false,
          error: 'Shop name taken'
        }
      }
      const newShop = this.shops.create(createShopInput);
      newShop.owner = owner;
      newShop.email = owner.email;
      await this.shops.save(newShop);
      return {
        ok: true,
        shop: newShop
      }
    } catch {
      return {
        ok: false,
        error: 'Could not create shop'
      }
    }
  }

  async findShop(
    { shopId }: FindShopInput 
  ): Promise<FindShopOutput> {
    try {
      const shop = await this.shops.findOne({ id: shopId });
      if (!shop) {
        return {
          ok: false, 
          error: 'Shop not found'
        }
      } 
      return {
        ok: true,
        shop
      }
    } catch {
      return {
        ok: false,
        error: 'Could not find shop'
      }
    }
  }

  async myShops(owner: User): Promise<MyShopsOutput> {
    try {
      const shops = await this.shops.find({ where: { owner }, loadEagerRelations: true });
      return {
        ok: true, 
        shops
      }
    } catch {
      return {
        ok: false,
        error: 'Could not find shops'
      }
    }
  }

  async editShop(
    owner: User,
    updateShopInput: UpdateShopInput
    ): Promise<UpdateShopOutput> {
    const { shopId } = updateShopInput;
    try {
      const shop = await this.shops.findOne({ id: shopId });
      if (!shop) {
        return {
          ok: false, 
          error: 'Shop not found'
        }
      } 
      if (shop.ownerId !== owner.id) {
        return {
          ok: false,
          error: 'you don\'t have the priviledge'
        }
      }
      delete updateShopInput.shopId;
      const [updatedShop] =  await this.shops.save([
        {
          id: shopId,
          ...updateShopInput
        }
      ]);
      return {
        ok: true,
        shop: updatedShop
      }
    } catch {
      return {
        ok: false,
        error: 'Could not edit shop'
      }
    }
  }

  async deleteShop(
    owner: User,
    { shopId }: DeleteShopInput
  ): Promise<DeleteShopOutput> {
    try {
      const shop = await this.shops.findOne({ id: shopId });
      if (!shop) {
        return {
          ok: false, 
          error: 'Shop not found'
        }
      } 
      if (shop.ownerId !== owner.id) {
        return {
          ok: false,
          error: 'you don\'t have the priviledge'
        }
      }
      await this.shops.delete({ id: shopId })
      return {
        ok: true,
        shop
      }
    } catch {
      return {
        ok: false,
        error: 'Could not delete shop'
      }
    }
  }
}
