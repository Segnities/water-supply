import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDetailDto } from './create-transaction_detail.dto';

export class UpdateTransactionDetailDto extends PartialType(CreateTransactionDetailDto) {}
