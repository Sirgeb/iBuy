import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Shop } from 'src/shops/entities/shop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Shop])],
  providers: [
    ItemsService, 
    ItemsResolver
  ]
})
export class ItemsModule {}
