import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
   @PrimaryGeneratedColumn()
   transaction_id:number;

   @Column({type: 'timestamp without time zone'})
   transaction_date: Date;

   @Column({type: 'decimal'})
   amount:number;
}
