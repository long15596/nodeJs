"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../entity/Category"));
const data_source_1 = require("../data-source");
class CategoryService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Category_1.default);
        this.findAll = async () => {
            return await this.repository.find({
                relations: {
                    product: true
                }
            });
        };
    }
    save(data) {
        throw new Error("Method not implemented.");
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
exports.default = new CategoryService();
//# sourceMappingURL=CategoryService.js.map