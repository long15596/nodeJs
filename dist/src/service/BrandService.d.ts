import { Brand } from "../entity/Brand";
import { IService } from "./IService";
declare class BrandService implements IService<Brand> {
    private repository;
    findAll: () => Promise<Brand[]>;
    save: (data: Brand) => Promise<Brand>;
    update: (id: number, data: Brand) => Promise<import("typeorm").UpdateResult>;
    findById: (id: number) => Promise<Brand[]>;
    delete: (id: number) => Promise<import("typeorm").DeleteResult>;
}
declare const _default: BrandService;
export default _default;
