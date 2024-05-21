import {IService} from "./IService";
import {Product} from "../entity/Product";
import {AppDataSource} from "../data-source";
class ProductService implements IService<Product> {
    private repository = AppDataSource.getRepository(Product)
    findAll = async () => {
        return await this.repository.find({
            relations: {
                subCategory: true,
                brand: true,
                productShows: true
            }
        });
    }
    save = async (data: Product) => {
        return await this.repository.save(data);
    }

    update = async (id: number, data: Product) => {
        return await this.repository.update(id, data);
    }

    findById = async (id: number)=> {
        return await this.repository.find({where: {id: id}});
    }

    delete = async (id: number)=> {
        await this.repository.delete(id);
    }
}
export default new ProductService()