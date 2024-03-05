import { TransactionDetail } from "src/transaction_details/entities/transaction_detail.entity";
import { VendingMachine } from "src/vending_machines/entities/vending_machine.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Transaction {
   @PrimaryGeneratedColumn()
   transaction_id:number;

   @Column({type: 'timestamp without time zone'})
   transaction_date: Date;

   @Column({type: 'decimal'})
   amount:number;

   @ManyToOne(()=> VendingMachine, vendingMachine=> vendingMachine.transactions)
   vending_machine:VendingMachine;

   @OneToMany(()=> TransactionDetail, tr_details=> tr_details.transaction)
   transaction_details: TransactionDetail[]
}
