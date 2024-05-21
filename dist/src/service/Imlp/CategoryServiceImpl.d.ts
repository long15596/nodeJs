import Category from "src/entity/Category";
import { ICategoryService } from "../ICategoryService";
export declare class CategoryServiceImpl implements ICategoryService {
    private repository;
    findAll: () => Promise<Category[]>;
    save: (data: Category) => Promise<Category>;
    update(id: number, data: Category): Promise<import("typeorm").UpdateResult>;
    findById: (id: number) => Promise<Category[]>;
    delete(id: number): void;
}
