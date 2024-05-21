import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "./Role";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false, unique: true})
    username: string;
    @Column({nullable: false})
    password: string;
    @Column()
    name: string;
    @Column()
    phone: string;
    @Column()
    mail: string;
    @Column({length: 1000})
    avatar: string;
    @Column()
    status: boolean;
    @ManyToOne(() => Role, (role) => role.user)
    role: Role[];
}