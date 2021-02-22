import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { Role } from 'src/auth/role.decorator';
import { User } from 'src/users/entities/user.entity';
import { CreateItemInput, CreateItemOutput } from './dtos/create-item.dto';
import { DeleteItemInput, DeleteItemOutput } from './dtos/delete-item.dto';
import { GetItemInput, GetItemOutput } from './dtos/get-item.dto';
import { GetItemsInput, GetItemsOutput } from './dtos/get-items.dto';
import { UpdateItemInput, UpdateItemOutput } from './dtos/update-item.dto';
import { ItemsService } from './items.service';

@Resolver()
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(returns => GetItemOutput)
  @Role(['Any'])
  getItem(
    @Args('input') getItemInput: GetItemInput,
  ): Promise<GetItemOutput> {
    return this.itemsService.getItem(getItemInput);
  }

  @Query(returns => GetItemsOutput)
  @Role(['Any'])
  getItems(
    @Args('input') getItemsInput: GetItemsInput
  ): Promise<GetItemOutput> {
    return this.itemsService.getItems(getItemsInput);
  }

  @Mutation(returns => CreateItemOutput)
  @Role(['Seller'])
  createItem(
    @AuthUser() owner: User,
    @Args('input') createItemInput: CreateItemInput,
  ): Promise<CreateItemOutput> {
    return this.itemsService.createItem(owner, createItemInput);
  }

  @Mutation(returns => UpdateItemOutput)
  @Role(['Seller'])
  updateItem(
    @AuthUser() owner: User,
    @Args('input') updateItemInput: UpdateItemInput,
  ): Promise<UpdateItemOutput> {
    return this.itemsService.updateItem(owner, updateItemInput);
  }

  @Mutation(returns => DeleteItemOutput)
  @Role(['Seller'])
  deleteItem(
    @AuthUser() owner: User,
    @Args('input') deleteItemInput: DeleteItemInput,
  ): Promise<DeleteItemOutput> {
    return this.itemsService.deleteItem(owner, deleteItemInput);
  }
}
