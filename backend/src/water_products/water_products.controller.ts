import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaterProductsService } from './water_products.service';
import { CreateWaterProductDto } from './dto/create-water_product.dto';
import { UpdateWaterProductDto } from './dto/update-water_product.dto';

@Controller('water-products')
export class WaterProductsController {
  constructor(private readonly waterProductsService: WaterProductsService) {}

  @Post()
  create(@Body() createWaterProductDto: CreateWaterProductDto) {
    return this.waterProductsService.create(createWaterProductDto);
  }

  @Get()
  findAll() {
    return this.waterProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waterProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWaterProductDto: UpdateWaterProductDto) {
    return this.waterProductsService.update(+id, updateWaterProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waterProductsService.remove(+id);
  }
}
