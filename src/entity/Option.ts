import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {OptionValue} from "./OptionValue";

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(() => OptionValue, (optionValue) => optionValue.option)
    optionValue: OptionValue[];
}