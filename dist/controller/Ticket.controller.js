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
exports.deleteTicketHandler = exports.updateTicketHandler = exports.addTicketHandler = exports.getTicketsByIdHandler = exports.getTicketsEventByAdmin_idHandler = exports.getAllTicketsHandler = void 0;
const db_1 = require("../config/db");
const getAllTicketsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const Ticket = yield db_1.prisma.ticket.findMany({
        where: { user_id: user.id },
    });
    return res.status(200).json(Ticket);
});
exports.getAllTicketsHandler = getAllTicketsHandler;
const getTicketsEventByAdmin_idHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ticketid } = req.params;
    // const user = res.locals.user as Ticket;
    const Tickets = yield db_1.prisma.ticket.findMany({
        where: { eventByAdmin_id: ticketid },
    });
    return res.status(200).json(Tickets);
});
exports.getTicketsEventByAdmin_idHandler = getTicketsEventByAdmin_idHandler;
const getTicketsByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ticketid } = req.params;
    // const user = res.locals.user as Ticket;
    const Tickets = yield db_1.prisma.ticket.findMany({
        where: { id: ticketid },
    });
    return res.status(200).json(Tickets);
});
exports.getTicketsByIdHandler = getTicketsByIdHandler;
const addTicketHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, numberOfTicket, price, image, seatsLocation, eventByAdmin_id } = req.body;
        const user = res.locals.user;
        // const {eventid} = req.params as any  
        yield db_1.prisma.ticket.create({
            data: {
                type,
                numberOfTicket,
                price,
                user_id: user.id,
                eventByAdmin_id,
                image,
                seatsLocation,
            },
        });
        return res.status(201).json({
            message: 'New Ticket created for user : ' + user.id,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
});
exports.addTicketHandler = addTicketHandler;
// eventByAdmin_id
const updateTicketHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const updatedBlog = req.body;
        const { ticketid } = req.params;
        const isUpdated = yield db_1.prisma.ticket.updateMany({
            where: {
                id: ticketid,
                user_id: user.id,
            },
            data: updatedBlog,
        });
        if (isUpdated.count == 0) {
            return res.status(400).json({
                message: 'Invalid Ticket id',
            });
        }
        return res.status(200).json({
            message: 'Ticket updated !',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Server error !',
        });
    }
});
exports.updateTicketHandler = updateTicketHandler;
const deleteTicketHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = res.locals.user;
    const { ticketid } = req.params;
    const deleteCount = yield db_1.prisma.ticket.deleteMany({
        where: {
            id: ticketid,
            user_id: user.id,
        },
    });
    if (deleteCount.count == 0) {
        return res.status(400).json({
            message: 'Invalid Ticket id',
        });
    }
    return res.status(200).json({
        message: 'Ticket deleted !',
    });
});
exports.deleteTicketHandler = deleteTicketHandler;
