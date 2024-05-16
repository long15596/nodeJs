import {Router} from "express";
import userController from "../controller/UserController";

const userRouter = Router()
userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
export default userRouter