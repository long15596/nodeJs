"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryServiceImpl = void 0;
const Category_1 = __importDefault(require("src/entity/Category"));
const data_source_1 = require("../../data-source");
class CategoryServiceImpl {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Category_1.default);
        this.findAll = async () => {
            return await this.repository.find({
                relations: {
                    subCategory: true
                }
            });
        };
        this.save = async (data) => {
            return this.repository.save(data);
        };
        this.findById = (id) => {
            return this.repository.find({ where: { id: id } });
        };
    }
    update(id, data) {
        return this.repository.update(id, data);
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.CategoryServiceImpl = CategoryServiceImpl;
//# sourceMappingURL=CategoryServiceImpl.js.map