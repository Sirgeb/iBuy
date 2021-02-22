import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Shop } from '../entities/shop.entity';
import { CreateShopInput } from './create-shop.dto';

@InputType()
export class UpdateShopInput extends PartialType(CreateShopInput) {
  @Field(returns => Number)
  shopId: number;
}

@ObjectType()
export class UpdateShopOutput extends CoreOutput {
  @Field(returns => Shop, { nullable: true })
  shop?: Shop;
}
