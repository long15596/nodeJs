"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductShowOption = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
const Option_1 = require("./Option");
let ProductShowOption = exports.ProductShowOption = class ProductShowOption {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductShowOption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.id),
    __metadata("design:type", Product_1.Product)
], ProductShowOption.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Option_1.Option, (option) => option.id),
    __metadata("design:type", Option_1.Option)
], ProductShowOption.prototype, "option", void 0);
exports.ProductShowOption = ProductShowOption = __decorate([
    (0, typeorm_1.Entity)()
], ProductShowOption);
//# sourceMappingURL=ProductShowOption.js.map