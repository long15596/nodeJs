import {Router} from "express";
import productController from "../controller/ProductController";
import authority from "../middleware/authority";

const productRouter = Router();
productRouter.use(authority)
productRouter.get('', productController.findAll)
productRouter.post('', productController.save)
productRouter.put('/:id', productController.update)
productRouter.get('/:id', productController.findById)
export default productRouter;