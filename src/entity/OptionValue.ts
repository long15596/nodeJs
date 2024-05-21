import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Option} from "./Option";

@Entity()
export class OptionValue {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    value: string;
    @ManyToOne(type => Option, (option) => option.id)
    option: Option;
}