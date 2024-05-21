import {IService} from "./IService";
import Category from "../entity/Category";
import {AppDataSource} from "../data-source";

class CategoryService implements IService<Category> {
    private repository = AppDataSource.getRepository(Category)
    findAll = async () => {
        return await this.repository.find({
            relations: {
                subCategory: true
            }
        });
    }

    save = (data: Category) => {
        return this.repository.save(data);
    }

    update = (id: number, data: Category) => {
        return this.repository.update(id, data);
    }

    findById = (id: number) => {
        return this.repository.find({where: {id: id}});
    }

    delete(id: number) {
        throw new Error("Method not implemented.");
    }
}
export default new CategoryService()