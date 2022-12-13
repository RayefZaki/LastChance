"use strict";
<<<<<<< HEAD
=======
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
exports.deleteTicketAdminHandler = exports.updateTicketAdminHandler = exports.addTicketAdminHandler = exports.getByNameTicketAdminHandler = exports.getTicketAdminHandler = void 0;
const db_1 = require("../config/db");
const getTicketAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTickets = yield db_1.prisma.ticketAdmin.findMany();
        return res.status(200).json(allTickets);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.getTicketAdminHandler = getTicketAdminHandler;
const getByNameTicketAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { eventName } = req.params;
        const event = yield db_1.prisma.ticketAdmin.findFirst({
            where: { eventName: eventName }
        });
        return res.status(201).json(event);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.getByNameTicketAdminHandler = getByNameTicketAdminHandler;
const addTicketAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addTicketAdmin = req.body;
        yield db_1.prisma.ticketAdmin.create({
            data: addTicketAdmin
        });
        return res.status(201).json({ message: 'Add TicketAdmin' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.addTicketAdminHandler = addTicketAdminHandler;
const updateTicketAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateTicketAdmen = req.body;
        const { ticketAdminName } = req.params;
        yield db_1.prisma.ticketAdmin.update({
            where: { eventName: ticketAdminName },
            data: updateTicketAdmen
        });
        return res.status(201).json({ message: 'Updated' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.updateTicketAdminHandler = updateTicketAdminHandler;
const deleteTicketAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventName } = req.params;
        yield db_1.prisma.ticketAdmin.deleteMany({
            where: { eventName: eventName }
        });
        return res.status(200).json({ message: 'deleted' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.deleteTicketAdminHandler = deleteTicketAdminHandler;
>>>>>>> c2f22cca6760fbcd9940df9c4279532a3ea17538
