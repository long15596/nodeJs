import { IService } from "./IService";
import Category from "../entity/Category";
declare class CategoryService implements IService<Category> {
    private repository;
    findAll: () => Promise<Category[]>;
    save: (data: Category) => Promise<Category>;
    update: (id: number, data: Category) => Promise<import("typeorm").UpdateResult>;
    findById: (id: number) => Promise<Category[]>;
    delete(id: number): void;
}
declare const _default: CategoryService;
export default _default;
