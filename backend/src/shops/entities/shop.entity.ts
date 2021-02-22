import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entity";
import { Item } from "src/items/entities/item.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, RelationId } from "typeorm";

@InputType("ShopInputType", { isAbstract: true })
@ObjectType()
@Entity()
export class Shop extends CoreEntity {
  @Column()
  @Field(type => String)
  @IsString()
  name: string;

  @Column()
  @Field(type => String)
  @IsString()
  image: string;

  @Column()
  @Field(type => String)
  @IsString()
  address: string;

  @Column()
  @Field(type => String)
  @IsNumber()
  phoneNo: number;

  @Column()
  @Field(type => String)
  @IsString()
  email: string;

  @ManyToOne(type => User, user => user.shops, { onDelete: 'CASCADE' })
  @Field(type => User)
  owner: User

  @RelationId((shop: Shop) => shop.owner)
  ownerId: number;

  @OneToMany(type => Item, item => item.shop)
  @Field(type => [Item])
  items: Item[]
}
