import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Item } from '../entities/item.entity';

@InputType()
export class CreateItemInput extends PickType(Item, [
  'name',
  'discountPercent',
  'discountPrice',
  'brand',
  'category',
  'price',
  'image',
  'countInStock',
]) {
  @Field(type => Number)
  shopId: number;
}

@ObjectType()
export class CreateItemOutput extends CoreOutput {
  @Field(type => Item, { nullable: true })
  item?: Item;
}