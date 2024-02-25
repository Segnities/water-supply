import { Test, TestingModule } from '@nestjs/testing';
import { VendingMachinesController } from './vending_machines.controller';
import { VendingMachinesService } from './vending_machines.service';

describe('VendingMachinesController', () => {
  let controller: VendingMachinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendingMachinesController],
      providers: [VendingMachinesService],
    }).compile();

    controller = module.get<VendingMachinesController>(VendingMachinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
