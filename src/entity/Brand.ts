import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({length: 1000})
    image: string;
    @OneToMany(() => Product, (product) => product.brand)
    product: Product[];
}