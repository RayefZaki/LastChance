import express from "express";
import { registerHandler, getAllUsersHandler, deleteUserHandler, updateUserHandler, loginHandler } from "../controller/User.controller";
import { protect } from "../middlewares/auth";
import validate from "../middlewares/validate";
import { addUserSchema, deleteUserSchema, loginSchema, updateUserSchema } from "../zodSchema/User.zodSchema";

const userRouter = express.Router();

userRouter.get('/',getAllUsersHandler);
userRouter.post('/register',validate(addUserSchema),registerHandler);
userRouter.post('/login',validate(loginSchema),loginHandler)
userRouter.delete('/:userId',validate(deleteUserSchema),deleteUserHandler)
userRouter.put('/:userId',validate(updateUserSchema),updateUserHandler)


export default userRouter;