"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../entity/Product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Product_1.Product);
        this.findAll = async () => {
            return await this.repository.find({
                relations: {
                    subCategory: true,
                    brand: true,
                    productShows: true
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
            await this.repository.delete(id);
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map