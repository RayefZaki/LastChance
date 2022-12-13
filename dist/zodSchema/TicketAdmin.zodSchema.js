"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByNameTicketAdminSchema = exports.deleteTicketAdminSchema = exports.updateTicketAdminSchema = exports.addTicketAdminSchema = void 0;
const zod_1 = require("zod");
exports.addTicketAdminSchema = zod_1.z.object({
    body: zod_1.z.object({
        eventName: zod_1.z.string({ required_error: 'eventName is required' }),
        dateEvent: zod_1.z.string({ required_error: 'DateEvent is required' }),
        locationCity: zod_1.z.string({ required_error: 'LocationCity is required' }),
        locationEvent: zod_1.z.string({ required_error: 'locationEvent is required' }),
        shortDisc: zod_1.z.string({ required_error: "shortDisc is required" }),
        image: zod_1.z.string({ required_error: 'image is required' })
    })
});
exports.updateTicketAdminSchema = zod_1.z.object({
    body: zod_1.z.object({
        eventName: zod_1.z.string({ required_error: 'eventName is required' }),
        dateEvent: zod_1.z.string({ required_error: 'DateEvent is required' }),
        locationCity: zod_1.z.string({ required_error: 'LocationCity is required' }),
        locationEvent: zod_1.z.string({ required_error: 'locationEvent is required' }),
        shortDisc: zod_1.z.string({ required_error: "shortDisc is required" }),
        image: zod_1.z.string({ required_error: 'image is required' })
    }),
    params: zod_1.z.object({
        ticketAdminName: zod_1.z.string({ required_error: 'Ticket is required' })
    })
});
exports.deleteTicketAdminSchema = zod_1.z.object({
    params: zod_1.z.object({
        eventName: zod_1.z.string({ required_error: 'eventName is required' })
    })
});
exports.getByNameTicketAdminSchema = zod_1.z.object({
    params: zod_1.z.object({
        eventName: zod_1.z.string({ required_error: 'eventName is required' }),
    })
});
