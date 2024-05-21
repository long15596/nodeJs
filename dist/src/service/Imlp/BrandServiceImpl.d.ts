import { Brand } from "src/entity/Brand";
import { IBrandService } from "../IBrandService";
export declare class BrandServiceImpl implements IBrandService {
    private repository;
    findAll: () => Promise<Brand[]>;
    save: (data: Brand) => Promise<Brand>;
    update: (id: number, data: Brand) => Promise<import("typeorm").UpdateResult>;
    findById(id: number): Promise<Brand[]>;
    delete(id: number): void;
}
