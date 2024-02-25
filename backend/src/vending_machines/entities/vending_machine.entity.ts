import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VendingMachine {
   @PrimaryGeneratedColumn()
   vending_machine_id: number;

   @Column({type: 'varchar', length: 100})
   location:string;

   @Column({type: 'text'})
   description:string;
}
