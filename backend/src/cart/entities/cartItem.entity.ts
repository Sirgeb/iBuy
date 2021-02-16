import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entity";
import { Item } from "src/shops/entities/Item.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, RelationId } from "typeorm";

@InputType("CartItemInputType", { isAbstract: true })
@ObjectType()
@Entity()
export class CartItem extends CoreEntity {
  @Column({ default: 1 })
  @Field(type => Number)
  @IsNumber()
  quantity: number;

  @OneToOne(type => Item)
  @JoinColumn()
  @Field(type => Item)
  item: Item;

  @ManyToOne(type => User, user => user.cart, { onDelete: 'CASCADE', eager: true })
  @Field(type => User)
  user: User

  @RelationId((cartItem: CartItem) => cartItem.user)
  userId: number;
}
