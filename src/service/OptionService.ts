import {IService} from "./IService";
import {Option} from "../entity/Option";
import {AppDataSource} from "../data-source";

class OptionService implements IService<Option> {
    private repository = AppDataSource.getRepository(Option)
    findAll = async () => {
        return await this.repository.find({
            relations: {
                optionValue: true
            }
        });
    }

    save = async (data: Option) => {
        return await this.repository.save(data);
    }

    update = async (id: number, data: Option)=> {
        return await this.repository.update(id, data);
    }

    findById = async (id: number)=> {
        return await this.repository.find({where: {id: id}});
    }

    delete(id: number) {
        throw new Error("Method not implemented.");
    }

}