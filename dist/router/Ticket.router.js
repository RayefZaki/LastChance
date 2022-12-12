"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Ticket_controller_1 = require("../controller/Ticket.controller");
const auth_1 = require("../middlewares/auth");
const validate_1 = __importDefault(require("../middlewares/validate"));
const Ticket_zodSchema_1 = require("../zodSchema/Ticket.zodSchema");
const ticketRouter = express_1.default.Router();
ticketRouter.get('/', auth_1.protect, Ticket_controller_1.getAllTicketsHandler);
ticketRouter.post('/', auth_1.protect, (0, validate_1.default)(Ticket_zodSchema_1.addTicketSchema), Ticket_controller_1.addTicketHandler);
ticketRouter.put('/:ticketid', auth_1.protect, (0, validate_1.default)(Ticket_zodSchema_1.updateTicketSchema), Ticket_controller_1.updateTicketHandler);
ticketRouter.delete('/:ticketid', auth_1.protect, (0, validate_1.default)(Ticket_zodSchema_1.deleteTicketSchema), Ticket_controller_1.deleteTicketHandler);
exports.default = ticketRouter;
