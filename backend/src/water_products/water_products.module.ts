import { Module } from '@nestjs/common';
import { WaterProductsService } from './water_products.service';
import { WaterProductsController } from './water_products.controller';

@Module({
  controllers: [WaterProductsController],
  providers: [WaterProductsService],
})
export class WaterProductsModule {}
