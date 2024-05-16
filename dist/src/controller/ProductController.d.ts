declare class ProductController {
    findAll: (req: any, res: any) => Promise<void>;
    save: (request: any, response: any) => Promise<void>;
    update: (request: any, response: any) => Promise<void>;
    findById: (request: any, response: any) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
