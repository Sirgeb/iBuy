import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entity";
import { Item } from "src/shops/entities/Item.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { User } from "./user.entity";

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

  @ManyToOne(type => User, user => user.cart, { onDelete: 'CASCADE'})
  @Field(type => User)
  user: User;
}
