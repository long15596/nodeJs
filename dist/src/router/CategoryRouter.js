"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = __importDefault(require("../controller/CategoryController"));
const categoryRouter = (0, express_1.Router)();
categoryRouter.get('', CategoryController_1.default.findAll);
exports.default = categoryRouter;
//# sourceMappingURL=CategoryRouter.js.map