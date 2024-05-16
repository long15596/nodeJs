import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";

@Entity()
export default class Category {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @OneToMany(() => Product, (product) => product.category)
    product: Product[]
}