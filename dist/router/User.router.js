"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("../controller/User.controller");
const validate_1 = __importDefault(require("../middlewares/validate"));
const User_zodSchema_1 = require("../zodSchema/User.zodSchema");
const userRouter = express_1.default.Router();
userRouter.get('/', User_controller_1.getAllUsersHandler);
userRouter.post('/register', (0, validate_1.default)(User_zodSchema_1.addUserSchema), User_controller_1.registerHandler);
userRouter.post('/login', (0, validate_1.default)(User_zodSchema_1.loginSchema), User_controller_1.loginHandler);
userRouter.delete('/:userId', (0, validate_1.default)(User_zodSchema_1.deleteUserSchema), User_controller_1.deleteUserHandler);
userRouter.put('/:userId', (0, validate_1.default)(User_zodSchema_1.updateUserSchema), User_controller_1.updateUserHandler);
exports.default = userRouter;
