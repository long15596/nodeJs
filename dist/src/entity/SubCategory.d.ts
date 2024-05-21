import { Product } from "./Product";
import Category from "./Category";
export declare class SubCategory {
    id: number;
    name: string;
    category: Category;
    products: Product[];
}
