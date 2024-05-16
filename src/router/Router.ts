import {Router} from "express";
import productRouter from "./ProductRouter";
import categoryRouter from "./CategoryRouter";
import userRouter from "./UserRouter";

const router = Router();
router.use(`/products`, productRouter)
router.use(`/categories`, categoryRouter)
router.use('', userRouter)
export default router;
