import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Brand} from "./Brand";
import {ProductShow} from "./ProductShow";
import {SubCategory} from "./SubCategory";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    basePrice: number;
    @Column()
    status: string;
    @Column({length: 1000})
    image: string;
    @ManyToOne(() => SubCategory, (subCategory) => subCategory.id)
    subCategory: SubCategory;
    @ManyToOne(() => Brand, (brand) => brand.id)
    brand: Brand
    @OneToMany(() => ProductShow, (productShow) => productShow.product)
    productShows: ProductShow[];
}