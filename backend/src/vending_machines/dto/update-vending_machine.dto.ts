import { PartialType } from '@nestjs/mapped-types';
import { CreateVendingMachineDto } from './create-vending_machine.dto';

export class UpdateVendingMachineDto extends PartialType(CreateVendingMachineDto) {}
