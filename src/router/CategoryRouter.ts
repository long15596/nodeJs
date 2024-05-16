import {Router} from "express";
import categoryService from "../service/CategoryService";
import categoryController from "../controller/CategoryController";

const categoryRouter = Router()
categoryRouter.get('', categoryController.findAll)
export default categoryRouter