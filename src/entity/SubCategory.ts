import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";
import Category from "./Category";

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToOne(() => Category, (category) => category.id)
    category: Category;
    @OneToMany(() => Product, (product) => product.subCategory)
    products: Product[];
}