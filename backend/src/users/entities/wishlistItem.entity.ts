import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import { Item } from "src/shops/entities/Item.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { User } from "./user.entity";

@InputType("WishListItemInputType", { isAbstract: true })
@ObjectType()
@Entity()
export class WishListItem extends CoreEntity {
  @OneToOne(type => Item)
  @JoinColumn()
  item: Item;

  @ManyToOne(type => User, user => user.wishlist, { onDelete: 'CASCADE'})
  @Field(type => User)
  user: User
}