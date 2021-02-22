import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { PaginationInput, PaginationOutput } from 'src/common/dtos/pagination.dto';
import { Brand, Category, FilterOption, Item } from '../entities/item.entity';

@InputType()
export class GetItemsInput extends PaginationInput {
  @Field(type => String, { nullable: true })
  search?: string;

  @Field(type => Brand, { nullable: true })
  brand?: Brand;

  @Field(type => Category, { nullable: true })
  category?: Category;

  @Field(type => FilterOption, { nullable: true }) 
  price?: FilterOption;

  @Field(type => FilterOption, { nullable: true }) 
  discount?: FilterOption;
}

@ObjectType()
export class GetItemsOutput extends PaginationOutput {
  @Field(type => [Item], { nullable: true })
  items?: Item[];
}
