import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { Role } from 'src/auth/role.decorator';
import { User } from 'src/users/entities/user.entity';
import { CreateShopInput, CreateShopOutput } from './dtos/create-shop.dto';
import { DeleteShopInput, DeleteShopOutput } from './dtos/delete-shop.dto';
import { UpdateShopInput, UpdateShopOutput } from './dtos/update-shop.dto';
import { FindShopInput, FindShopOutput } from './dtos/find-shop.dto';
import { MyShopsOutput } from './dtos/my-shops.dto';
import { ShopsService } from './shops.service';

@Resolver()
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Query(returns => MyShopsOutput)
  @Role(['Seller'])
  myShops(@AuthUser() owner: User): Promise<MyShopsOutput> {
    return this.shopsService.myShops(owner);
  }

  @Query(returns => FindShopOutput)
  @Role(['Any'])
  findShop(
    @Args('input') findShopInput: FindShopInput,
  ): Promise<FindShopOutput> {
    return this.shopsService.findShop(findShopInput);
  }

  @Mutation(returns => CreateShopOutput)
  @Role(['Seller'])
  createShop(
    @AuthUser() owner: User,
    @Args('input') createShopInput: CreateShopInput,
  ): Promise<CreateShopOutput> {
    return this.shopsService.createShop(owner, createShopInput);
  }

  @Mutation(returns => UpdateShopOutput)
  @Role(['Seller'])
  updateShop(
    @AuthUser() owner: User,
    @Args('input') updateShopInput: UpdateShopInput,
  ): Promise<UpdateShopOutput> {
    return this.shopsService.editShop(owner, updateShopInput);
  }

  @Mutation(returns => DeleteShopOutput)
  @Role(['Seller'])
  deleteShop(
    @AuthUser() owner: User,
    @Args('input') deleteShopInput: DeleteShopInput,
  ): Promise<DeleteShopOutput> {
    return this.shopsService.deleteShop(owner, deleteShopInput);
  }
}
