import { Field, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

export enum Brand {
  Buyer = 'Buyer',
  Seller = 'Seller',
  Delivery = 'Delivery'
}

export enum Category {
  Tshirt = 'Tshirt',
  Trouser = 'Trouser',
  Shoe = 'Shoe',
  Watch = 'Watch',
  Device = 'Device'
}

registerEnumType(Brand, { name: 'Brand' });
registerEnumType(Category, { name: 'Category' });

@InputType("ItemInputType", { isAbstract: true })
@ObjectType()
@Entity()
export class Item extends CoreEntity {
  @Column()
  @IsString()
  @Field(type => String)
  name: string;

  @Column()
  @Field(type => Number)
  @IsNumber()
  discountPercent: number;

  @Column()
  @Field(type => Number)
  @IsNumber()
  discountPrice: number;

  @Column()
  @Field(type => Number)
  @IsNumber()
  price: number;

  @Column({ enum: Brand })
  @Field(type => Brand)
  @IsEnum(Brand)
  brand: Brand;

  @Column({ enum: Category })
  @Field(type => Category)
  @IsEnum(Category)
  category: Category;

  @Column()
  @Field(type => String)
  @IsString()
  image: string;

  @Column()
  @Field(type => Number)
  @IsNumber()
  countInStock: number;

  @Column()
  @Field(type => Number)
  @IsNumber()
  sold: number;
}
