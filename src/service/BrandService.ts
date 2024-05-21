import {Repository} from "typeorm";
import {AppDataSource} from "../data-source";
import {Brand} from "../entity/Brand";
import {IService} from "./IService";

class BrandService implements IService<Brand> {
    private repository = AppDataSource.getRepository(Brand);

    findAll = async () => {
        return await this.repository.find({
            relations: {
                product: true
            }
        });
    }

    save = async (data: Brand) => {
        return await this.repository.save(data);
    }

    update = async (id: number, data: Brand) => {
        return await this.repository.update(id, data);
    }

    findById = async (id: number) => {
        return await this.repository.find({where: {id: id}});
    }

    delete = async (id: number) => {
        return await this.repository.delete(id);
    }
}
export default new BrandService()