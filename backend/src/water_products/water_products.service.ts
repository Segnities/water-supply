import { Injectable } from '@nestjs/common';
import { CreateWaterProductDto } from './dto/create-water_product.dto';
import { UpdateWaterProductDto } from './dto/update-water_product.dto';

@Injectable()
export class WaterProductsService {
  create(createWaterProductDto: CreateWaterProductDto) {
    return 'This action adds a new waterProduct';
  }

  findAll() {
    return `This action returns all waterProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} waterProduct`;
  }

  update(id: number, updateWaterProductDto: UpdateWaterProductDto) {
    return `This action updates a #${id} waterProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} waterProduct`;
  }
}
