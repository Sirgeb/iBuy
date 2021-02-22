import { Field, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entity";
import { Shop } from "src/shops/entities/shop.entity";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";

export enum Brand {
  Adidas = 'Adidas',
  Reebok = 'Reebok',
  Nike = 'Nike',
  Fila = 'Fila'
}

export enum Category {
  Tshirt = 'Tshirt',
  Trouser = 'Trouser',
  Shoe = 'Shoe',
  Watch = 'Watch',
  Device = 'Device'
}

export enum FilterOption {
  Highest = 'DESC',
  Lowest = 'ASC'
}

registerEnumType(Brand, { name: 'Brand' });
registerEnumType(Category, { name: 'Category' });
registerEnumType(FilterOption, { name: 'FilterOption' });

@InputType("ItemsInputType", { isAbstract: true })
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

  @Column({ default: 0 })
  @Field(type => Number, { defaultValue: 0 })
  @IsNumber()
  sold: number;

  @ManyToOne(type => Shop, shop => shop.items, { onDelete: 'CASCADE', eager: true })
  @Field(type => Shop)
  shop: Shop

  @RelationId((item: Item) => item.shop)
  shopId: number;
}
