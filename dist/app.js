"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import 'config/db';
const db_1 = require("./config/db");
const User_router_1 = __importDefault(require("./router/User.router"));
const Ticket_router_1 = __importDefault(require("./router/Ticket.router"));
require("dotenv/config");
(0, db_1.connectDB)();
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const port = 3000;
app.use((0, cors_1.default)());
app.use('/api/v1/auth', User_router_1.default);
app.use('/api/v1/ticket', Ticket_router_1.default);
const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server is ${port}`);
});
