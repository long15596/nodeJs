"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandServiceImpl = void 0;
const Brand_1 = require("src/entity/Brand");
const data_source_1 = require("../../data-source");
class BrandServiceImpl {
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
            return this.repository.update(id, data);
        };
    }
    findById(id) {
        return this.repository.find({ where: { id: id } });
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.BrandServiceImpl = BrandServiceImpl;
//# sourceMappingURL=BrandServiceImpl.js.map