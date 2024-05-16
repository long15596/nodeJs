"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await ProductService_1.default.findAll();
            res.json(list);
        };
        this.save = async (request, response) => {
            let data = await ProductService_1.default.save(request.body);
            response.json(data);
        };
        this.update = async (request, response) => {
            let data = await ProductService_1.default.update(request.params.id, request.body);
            response.json(data);
        };
        this.findById = async (request, response) => {
            let data = await ProductService_1.default.findById(request.params.id);
            response.json(data);
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=ProductController.js.map