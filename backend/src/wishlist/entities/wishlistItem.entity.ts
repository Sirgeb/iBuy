import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import { Item } from "src/shops/entities/Item.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne, RelationId } from "typeorm";

@InputType("WishListItemInputType", { isAbstract: true })
@ObjectType()
@Entity()
export class WishListItem extends CoreEntity {
  @OneToOne(type => Item)
  @JoinColumn()
  @Field(type => Item)
  item: Item;

  @ManyToOne(type => User, user => user.cart, { onDelete: 'CASCADE', eager: true })
  @Field(type => User)
  user: User

  @RelationId((wishlistItem: WishListItem) => wishlistItem.user)
  userId: number;
}