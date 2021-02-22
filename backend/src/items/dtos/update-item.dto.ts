import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Item } from '../entities/item.entity';
import { CreateItemInput } from './create-item.dto';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @Field(returns => Number)
  itemId: number;
}

@ObjectType()
export class UpdateItemOutput extends CoreOutput {
  @Field(returns => Item, { nullable: true })
  item?: Item;
}
