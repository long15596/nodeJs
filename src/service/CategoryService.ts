import {IService} from "./IService";
import Category from "../entity/Category";
import {AppDataSource} from "../data-source";

class CategoryService implements IService<Category> {
    private repository = AppDataSource.getRepository(Category)
    findAll = async () => {
        return await this.repository.find({
            relations: {
                product: true
            }
        });
    }

    save(data: Category) {
        throw new Error("Method not implemented.");
    }

    update(id: number, data: Category) {
        throw new Error("Method not implemented.");
    }

    findById(id: number) {
        throw new Error("Method not implemented.");
    }

    delete(id: number) {
        throw new Error("Method not implemented.");
    }
}
export default new CategoryService()