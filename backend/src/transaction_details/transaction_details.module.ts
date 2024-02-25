import { Module } from '@nestjs/common';
import { TransactionDetailsService } from './transaction_details.service';
import { TransactionDetailsController } from './transaction_details.controller';

@Module({
  controllers: [TransactionDetailsController],
  providers: [TransactionDetailsService],
})
export class TransactionDetailsModule {}
