"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OptionValue_1 = require("../entity/OptionValue");
const data_source_1 = require("../data-source");
class OptionValueService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(OptionValue_1.OptionValue);
        this.findAll = async () => {
            return await this.repository.find({
                relations: {
                    option: true
                }
            });
        };
        this.save = async (data) => {
            return await this.repository.save(data);
        };
    }
    update(id, data) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=OptionValueService.js.map