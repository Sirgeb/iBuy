import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CartItem } from "src/cart/entities/cartItem.entity";
import { CoreEntity } from "src/common/entities/core.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";

@InputType("OrderInputType", { isAbstract: true })
@ObjectType()
@Entity()
export class Order extends CoreEntity {
  @Column()
  @Field(type => Number)
  total: number;

  @Column()
  @Field(type => String)
  charge: string;

  @ManyToOne(type => User, user => user.cart)
  @Field(type => [CartItem])
  items: CartItem[]

  @ManyToOne(type => User, user => user.orders, { onDelete: 'CASCADE' })
  user: User

  @RelationId((order: Order) => order.user)
  userId: number;
}
