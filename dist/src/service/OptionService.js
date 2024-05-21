"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Option_1 = require("../entity/Option");
const data_source_1 = require("../data-source");
class OptionService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Option_1.Option);
        this.findAll = async () => {
            return await this.repository.find({
                relations: {
                    optionValue: true
                }
            });
        };
        this.save = async (data) => {
            return await this.repository.save(data);
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.findById = async (id) => {
            return await this.repository.find({ where: { id: id } });
        };
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=OptionService.js.map