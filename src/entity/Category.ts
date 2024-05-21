import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";
import {SubCategory} from "./SubCategory";

@Entity()
export default class Category {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @OneToMany(() => SubCategory, subCategory => subCategory.category)
    subCategory: SubCategory[];
}