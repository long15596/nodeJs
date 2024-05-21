import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";

@Entity()
export class ProductShow {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    price: number;
    @Column()
    quantity: number;
    @Column()
    status: string;
    @Column()
    quantitySell: number;
    @ManyToOne(() => Product, (product) => product.id)
    product: Product;
}