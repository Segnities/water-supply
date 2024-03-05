import { VendingMachine } from "src/vending_machines/entities/vending_machine.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

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
}
