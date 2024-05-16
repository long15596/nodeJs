"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductRouter_1 = __importDefault(require("./ProductRouter"));
const CategoryRouter_1 = __importDefault(require("./CategoryRouter"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const router = (0, express_1.Router)();
router.use(`/products`, ProductRouter_1.default);
router.use(`/categories`, CategoryRouter_1.default);
router.use('', UserRouter_1.default);
exports.default = router;
//# sourceMappingURL=Router.js.map