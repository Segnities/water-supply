import { Test, TestingModule } from '@nestjs/testing';
import { WaterProductsService } from './water_products.service';

describe('WaterProductsService', () => {
  let service: WaterProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterProductsService],
    }).compile();

    service = module.get<WaterProductsService>(WaterProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
