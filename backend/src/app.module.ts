import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { VendingMachinesModule } from './vending_machines/vending_machines.module';
import { WaterProductsModule } from './water_products/water_products.module';
import { TransactionDetailsModule } from './transaction_details/transaction_details.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER_NAME,
      database: process.env.DB_NAME,
      logging: true,
      synchronize: true,
      entities: [],
    }),
    TransactionsModule,
    VendingMachinesModule,
    WaterProductsModule,
    TransactionDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
