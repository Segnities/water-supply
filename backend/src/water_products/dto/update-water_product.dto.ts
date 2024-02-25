import { PartialType } from '@nestjs/mapped-types';
import { CreateWaterProductDto } from './create-water_product.dto';

export class UpdateWaterProductDto extends PartialType(CreateWaterProductDto) {}
