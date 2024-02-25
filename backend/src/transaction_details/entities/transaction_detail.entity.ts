import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TransactionDetail {
   @PrimaryGeneratedColumn()
   transaction_detail_id: number;

   @Column({type: 'int'})
   quantity:number;
}
