"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class CategoryController {
    constructor() {
        this.findAll = async (request, response) => {
            let list = await CategoryService_1.default.findAll();
            response.json(list);
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=CategoryController.js.map