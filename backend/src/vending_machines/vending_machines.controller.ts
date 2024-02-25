import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendingMachinesService } from './vending_machines.service';
import { CreateVendingMachineDto } from './dto/create-vending_machine.dto';
import { UpdateVendingMachineDto } from './dto/update-vending_machine.dto';

@Controller('vending-machines')
export class VendingMachinesController {
  constructor(private readonly vendingMachinesService: VendingMachinesService) {}

  @Post()
  create(@Body() createVendingMachineDto: CreateVendingMachineDto) {
    return this.vendingMachinesService.create(createVendingMachineDto);
  }

  @Get()
  findAll() {
    return this.vendingMachinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendingMachinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendingMachineDto: UpdateVendingMachineDto) {
    return this.vendingMachinesService.update(+id, updateVendingMachineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendingMachinesService.remove(+id);
  }
}
