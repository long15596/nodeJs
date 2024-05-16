import {Router} from "express";
import productController from "../controller/ProductController";

const productRouter = Router();
productRouter.get('', productController.findAll)
productRouter.post('', productController.save)
productRouter.put('/:id', productController.update)
productRouter.get('/:id', productController.findById)
export default productRouter;