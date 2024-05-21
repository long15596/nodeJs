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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategory = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
const Category_1 = __importDefault(require("./Category"));
let SubCategory = exports.SubCategory = class SubCategory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SubCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1.default, (category) => category.id),
    __metadata("design:type", Category_1.default)
], SubCategory.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Product_1.Product, (product) => product.subCategory),
    __metadata("design:type", Array)
], SubCategory.prototype, "products", void 0);
exports.SubCategory = SubCategory = __decorate([
    (0, typeorm_1.Entity)()
], SubCategory);
//# sourceMappingURL=SubCategory.js.map