"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EventByAdmin_controller_1 = require("../controller/EventByAdmin.controller");
const validate_1 = __importDefault(require("../middlewares/validate"));
const EventByAdmin_zodSchema_1 = require("../zodSchema/EventByAdmin.zodSchema");
const EventByAdminRouter = express_1.default.Router();
EventByAdminRouter.get('/', EventByAdmin_controller_1.getEventByAdminHandler);
EventByAdminRouter.get('/:ticketid', (0, validate_1.default)(EventByAdmin_zodSchema_1.getByNameEventByAdminSchema), EventByAdmin_controller_1.getByNameEventByAdminHandler);
EventByAdminRouter.post('/', (0, validate_1.default)(EventByAdmin_zodSchema_1.addEventByAdminSchema), EventByAdmin_controller_1.addEventByAdminHandler);
EventByAdminRouter.put('/:EventByAdminName', (0, validate_1.default)(EventByAdmin_zodSchema_1.updateEventByAdminSchema), EventByAdmin_controller_1.updateEventByAdminHandler);
EventByAdminRouter.delete('/:eventName', (0, validate_1.default)(EventByAdmin_zodSchema_1.deleteEventByAdminSchema), EventByAdmin_controller_1.deleteEventByAdminHandler);
exports.default = EventByAdminRouter;
// getByNameEventByAdminHandler
