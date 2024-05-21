import {Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductShow} from "./ProductShow";
import {OptionValue} from "./OptionValue";

@Entity()
export class ProductShowOptionValue {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => ProductShow, (productShow) => productShow.id)
    productShow: ProductShow;
    @ManyToOne(() => OptionValue, (optionValue) => optionValue.id)
    optionValues: OptionValue;
}