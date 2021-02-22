import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Shop } from '../entities/shop.entity';

@InputType()
export class MyShopsInput {}

@ObjectType()
export class MyShopsOutput extends CoreOutput {
  @Field(returns => [Shop], { nullable: true })
  shops?: Shop[];
}
