import { IService } from "./IService";
import User from "../entity/User";
declare class UserService implements IService<User> {
    private repository;
    findAll(): void;
    save: (data: User) => Promise<User>;
    update(id: number, data: User): void;
    findById(id: number): void;
    delete(id: number): void;
    login: (data: any) => Promise<{
        token: string;
        id: number;
        username: string;
    }>;
}
declare const _default: UserService;
export default _default;
