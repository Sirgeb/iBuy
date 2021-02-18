import { Field, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { IsBoolean, IsEnum, IsString } from "class-validator";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from "typeorm";
import bcrypt from 'bcrypt';
import { CoreEntity } from "src/common/entities/core.entity";
import { Shop } from "src/shops/entities/shop.entity";
import { Order } from "src/orders/entities/order.entity";
import { WishListItem } from "src/wishlist/entities/wishlistItem.entity";
import { CartItem } from "src/cart/entities/cartItem.entity";
import { InternalServerErrorException } from "@nestjs/common";

export enum UserRole {
  Buyer = 'Buyer',
  Seller = 'Seller',
  Delivery = 'Delivery'
}

registerEnumType(UserRole, { name: 'UserRole' });

@InputType("UserInputType", { isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field(type => String)
  @IsString()
  username: string;

  @Column()
  @Field(type => String)
  @IsString()
  email: string;

  @Column({ default: false })
  @Field(type => Boolean)
  @IsBoolean()
  verified: boolean;

  @Column({ select: false })
  @Field(type => String)
  @IsString()
  password: string;

  @Column({ enum: UserRole })
  @Field(type => UserRole)
  @IsEnum(UserRole)
  role: UserRole;

  @OneToMany(type => CartItem, cartItem => cartItem.user)
  @Field(type => [CartItem])
  cart: CartItem[]

  @OneToMany(type => WishListItem, wishlistItem => wishlistItem.user)
  @Field(type => [WishListItem])
  wishlist: WishListItem[]

  @OneToMany(type => Shop, shop => shop.owner)
  @Field(type => [Shop])
  shops: Shop[]

  @OneToMany(type => Order, order => order.user)
  @Field(type => [Order])
  orders: Order[]

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (e) {
        console.log(e);
        throw new InternalServerErrorException();
      }
    }
  }

  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      const ok = await bcrypt.compare(aPassword, this.password);
      return ok;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }
}
