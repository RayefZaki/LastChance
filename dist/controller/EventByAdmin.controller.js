"use strict";
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
exports.deleteEventByAdminHandler = exports.updateEventByAdminHandler = exports.addEventByAdminHandler = exports.getByNameEventByAdminHandler = exports.getEventByAdminHandler = void 0;
const db_1 = require("../config/db");
const getEventByAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTickets = yield db_1.prisma.eventByAdmin.findMany();
        return res.status(200).json(allTickets);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.getEventByAdminHandler = getEventByAdminHandler;
const getByNameEventByAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { ticketid } = req.params;
        const event = yield db_1.prisma.eventByAdmin.findFirst({
            where: { id: ticketid }
        });
        return res.status(201).json(event);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.getByNameEventByAdminHandler = getByNameEventByAdminHandler;
const addEventByAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addEventByAdmin = req.body;
        yield db_1.prisma.eventByAdmin.create({
            data: addEventByAdmin
        });
        return res.status(201).json({ message: 'Add EventByAdmin' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.addEventByAdminHandler = addEventByAdminHandler;
const updateEventByAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateTicketAdmen = req.body;
        const { EventByAdminName } = req.params;
        yield db_1.prisma.eventByAdmin.update({
            where: { eventName: EventByAdminName },
            data: updateTicketAdmen
        });
        return res.status(201).json({ message: 'Updated' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.updateEventByAdminHandler = updateEventByAdminHandler;
const deleteEventByAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventName } = req.params;
        yield db_1.prisma.eventByAdmin.deleteMany({
            where: { eventName: eventName }
        });
        return res.status(200).json({ message: 'deleted' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.deleteEventByAdminHandler = deleteEventByAdminHandler;
