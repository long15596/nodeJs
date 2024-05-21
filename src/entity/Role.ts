import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import User from "./User";
import {Product} from "./Product";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToMany(() => User, (user) => user.role)
    @JoinTable({name: "user_roles"})
    user: User[];
}