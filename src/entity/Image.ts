import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductShow} from "./ProductShow";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=> ProductShow, (product:ProductShow) => product.id)
    product: ProductShow;
    @Column({length: 1000})
    link: string;
}
