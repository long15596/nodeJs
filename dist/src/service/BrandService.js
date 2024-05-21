"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Brand_1 = require("../entity/Brand");
class BrandService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Brand_1.Brand);
        this.findAll = async () => {
            return await this.repository.find({
                relations: {
                    product: true
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
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
    }
}
exports.default = new BrandService();
//# sourceMappingURL=BrandService.js.map