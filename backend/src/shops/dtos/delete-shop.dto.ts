import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Shop } from '../entities/shop.entity';

@InputType()
export class DeleteShopInput  {
  @Field(returns => Number)
  shopId: number;
}

@ObjectType()
export class DeleteShopOutput extends CoreOutput {
  @Field(returns => Shop, { nullable: true })
  shop?: Shop;
}
