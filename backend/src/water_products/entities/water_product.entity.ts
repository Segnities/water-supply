import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WaterProduct {
   @PrimaryGeneratedColumn()
   product_id:number;

   @Column({type: 'varchar', length: 100})
   name: string;

   @Column({type: 'text'})
   description:string;

   @Column({type: 'decimal'})
   price: number;
}
