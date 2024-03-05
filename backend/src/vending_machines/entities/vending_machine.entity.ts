import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Transaction } from "src/transactions/entities/transaction.entity";

@Entity()
export class VendingMachine {
   @PrimaryGeneratedColumn()
   vending_machine_id: number;

   @Column({type: 'varchar', length: 100})
   location:string;

   @Column({type: 'text'})
   description:string;

   @OneToMany(()=> Transaction, transaction => transaction.vending_machine)
   transactions: Transaction[]
}
