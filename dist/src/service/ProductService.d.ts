import { IService } from "./IService";
import { Product } from "../entity/Product";
declare class ProductService implements IService<Product> {
    private repository;
    findAll: () => Promise<Product[]>;
    save: (data: Product) => Promise<Product>;
    update: (id: number, data: Product) => Promise<import("typeorm").UpdateResult>;
    findById: (id: number) => Promise<Product[]>;
    delete: (id: number) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
