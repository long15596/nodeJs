import { IService } from "./IService";
import Category from "../entity/Category";
declare class CategoryService implements IService<Category> {
    private repository;
    findAll: () => Promise<Category[]>;
    save(data: Category): void;
    update(id: number, data: Category): void;
    findById(id: number): void;
    delete(id: number): void;
}
declare const _default: CategoryService;
export default _default;
