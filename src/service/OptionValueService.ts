import {IService} from "./IService";
import {OptionValue} from "../entity/OptionValue";
import {AppDataSource} from "../data-source";

class OptionValueService implements IService<OptionValue> {
    private repository = AppDataSource.getRepository(OptionValue)
    findAll = async () => {
        return await this.repository.find({
            relations: {
                option: true
            }
        });
    }
    save = async (data: OptionValue) => {
        return await this.repository.save(data);
    }

    update(id: number, data: OptionValue) {
        throw new Error("Method not implemented.");
    }

    findById(id: number) {
        throw new Error("Method not implemented.");
    }

    delete(id: number) {
        throw new Error("Method not implemented.");
    }

}