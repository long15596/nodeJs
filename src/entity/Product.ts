import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Category from "./Category";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;
    @ManyToOne(() => Category, (category) => category.id)
    category: Category
}