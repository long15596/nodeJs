import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";
import {Option} from "./Option";

@Entity()
export class ProductShowOption {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Product, (product: Product) => product.id)
    product: Product;
    @ManyToOne(() => Option, (option) => option.id)
    option: Option;
}