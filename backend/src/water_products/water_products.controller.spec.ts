import { Test, TestingModule } from '@nestjs/testing';
import { WaterProductsController } from './water_products.controller';
import { WaterProductsService } from './water_products.service';

describe('WaterProductsController', () => {
  let controller: WaterProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaterProductsController],
      providers: [WaterProductsService],
    }).compile();

    controller = module.get<WaterProductsController>(WaterProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
