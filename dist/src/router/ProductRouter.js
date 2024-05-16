"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controller/ProductController"));
const productRouter = (0, express_1.Router)();
productRouter.get('', ProductController_1.default.findAll);
productRouter.post('', ProductController_1.default.save);
productRouter.put('/:id', ProductController_1.default.update);
productRouter.get('/:id', ProductController_1.default.findById);
exports.default = productRouter;
//# sourceMappingURL=ProductRouter.js.map