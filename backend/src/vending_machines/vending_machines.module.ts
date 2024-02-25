import { Module } from '@nestjs/common';
import { VendingMachinesService } from './vending_machines.service';
import { VendingMachinesController } from './vending_machines.controller';

@Module({
  controllers: [VendingMachinesController],
  providers: [VendingMachinesService],
})
export class VendingMachinesModule {}
