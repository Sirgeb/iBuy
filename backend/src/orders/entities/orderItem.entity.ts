import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import { Item } from "src/items/entities/item.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, OneToOne } from "typeorm";

@InputType("OrderItemInputType", { isAbstract: true })
@ObjectType()
@Entity()
export class OrderItem extends CoreEntity {
  @JoinColumn()
  @OneToOne(type => Item)
  @Field(type => Item)
  item: Item

  @JoinColumn()
  @OneToOne(type => User)
  @Field(type => User)
  user: User
}