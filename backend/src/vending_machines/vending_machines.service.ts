import { Injectable } from '@nestjs/common';
import { CreateVendingMachineDto } from './dto/create-vending_machine.dto';
import { UpdateVendingMachineDto } from './dto/update-vending_machine.dto';

@Injectable()
export class VendingMachinesService {
  create(createVendingMachineDto: CreateVendingMachineDto) {
    return 'This action adds a new vendingMachine';
  }

  findAll() {
    return `This action returns all vendingMachines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendingMachine`;
  }

  update(id: number, updateVendingMachineDto: UpdateVendingMachineDto) {
    return `This action updates a #${id} vendingMachine`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendingMachine`;
  }
}
