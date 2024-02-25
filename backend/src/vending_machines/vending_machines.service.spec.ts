import { Test, TestingModule } from '@nestjs/testing';
import { VendingMachinesService } from './vending_machines.service';

describe('VendingMachinesService', () => {
  let service: VendingMachinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendingMachinesService],
    }).compile();

    service = module.get<VendingMachinesService>(VendingMachinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
