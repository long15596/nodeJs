import { Brand } from "./Brand";
import { ProductShow } from "./ProductShow";
import { SubCategory } from "./SubCategory";
export declare class Product {
    id: number;
    name: string;
    basePrice: number;
    status: string;
    image: string;
    subCategory: SubCategory;
    brand: Brand;
    productShows: ProductShow[];
}
