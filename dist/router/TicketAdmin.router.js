"use strict";
<<<<<<< HEAD
=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TicketAdmin_controller_1 = require("../controller/TicketAdmin.controller");
const validate_1 = __importDefault(require("../middlewares/validate"));
const TicketAdmin_zodSchema_1 = require("../zodSchema/TicketAdmin.zodSchema");
const ticketAdminRouter = express_1.default.Router();
ticketAdminRouter.get('/', TicketAdmin_controller_1.getTicketAdminHandler);
ticketAdminRouter.get('/:eventName', (0, validate_1.default)(TicketAdmin_zodSchema_1.getByNameTicketAdminSchema), TicketAdmin_controller_1.getByNameTicketAdminHandler);
ticketAdminRouter.post('/', (0, validate_1.default)(TicketAdmin_zodSchema_1.addTicketAdminSchema), TicketAdmin_controller_1.addTicketAdminHandler);
ticketAdminRouter.put('/:ticketAdminName', (0, validate_1.default)(TicketAdmin_zodSchema_1.updateTicketAdminSchema), TicketAdmin_controller_1.updateTicketAdminHandler);
ticketAdminRouter.delete('/:eventName', (0, validate_1.default)(TicketAdmin_zodSchema_1.deleteTicketAdminSchema), TicketAdmin_controller_1.deleteTicketAdminHandler);
exports.default = ticketAdminRouter;
>>>>>>> c2f22cca6760fbcd9940df9c4279532a3ea17538
