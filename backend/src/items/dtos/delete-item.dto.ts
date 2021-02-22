import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Item } from '../entities/item.entity';

@InputType()
export class DeleteItemInput  {
  @Field(type => Number)
  itemId: number;
}

@ObjectType()
export class DeleteItemOutput extends CoreOutput {
  @Field(type => Item, { nullable: true })
 item?: Item;
}
