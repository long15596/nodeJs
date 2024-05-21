import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class WarrantyPolicy {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    content: string;
}