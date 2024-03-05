import { Transaction } from "src/transactions/entities/transaction.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
@Entity()
export class TransactionDetail {
   @PrimaryGeneratedColumn()
   transaction_detail_id: number;

   @Column({type: 'int'})
   quantity:number;

   @ManyToOne(()=> Transaction, transaction => transaction.transaction_details)
   transaction:Transaction
}
