"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHandler = exports.updateUserHandler = exports.deleteUserHandler = exports.registerHandler = exports.getAllUsersHandler = void 0;
const db_1 = require("../config/db");
const argon2 = __importStar(require("argon2"));
const jwt = __importStar(require("jsonwebtoken"));
const getAllUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield db_1.prisma.user.findMany();
        return res.status(201).json(allUsers);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.getAllUsersHandler = getAllUsersHandler;
const registerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addUser = req.body;
        const hashedPass = yield argon2.hash(addUser.password);
        addUser.password = hashedPass;
        yield db_1.prisma.user.create({
            data: addUser
        });
        return res.status(201).json({ message: 'Add new user' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error !" });
    }
});
exports.registerHandler = registerHandler;
const deleteUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        yield db_1.prisma.user.delete({
            where: { id: userId }
        });
        return res.status(200).json({ message: 'deleted' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json('Server Error !');
    }
});
exports.deleteUserHandler = deleteUserHandler;
const updateUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateDataUser = req.body;
        const { userId } = req.params;
        yield db_1.prisma.user.updateMany({
            where: { id: userId },
            data: updateDataUser
        });
        return res.status(201).json({ message: "Updated" });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json('Server Error !');
    }
});
exports.updateUserHandler = updateUserHandler;
const loginHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield db_1.prisma.user.findUnique({
            where: { username }
        });
        if (!user) {
            return res.status(400).json({ message: "Wrong username or password" });
        }
        ;
        const isMatched = yield argon2.verify(user.password, password);
        if (!isMatched) {
            return res.status(400).json({ message: "Wrong username or password" });
        }
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
        return res.status(201).json({ message: `Welcome ${user.username} !`, token });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error !' });
    }
});
exports.loginHandler = loginHandler;
