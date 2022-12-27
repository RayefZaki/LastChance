"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByNameEventByAdminSchema = exports.deleteEventByAdminSchema = exports.updateEventByAdminSchema = exports.addEventByAdminSchema = void 0;
const zod_1 = require("zod");
exports.addEventByAdminSchema = zod_1.z.object({
    body: zod_1.z.object({
        eventName: zod_1.z.string({ required_error: 'eventName is required' }),
        dateEvent: zod_1.z.date({ required_error: 'DateEvent is required' }),
        locationCity: zod_1.z.string({ required_error: 'LocationCity is required' }),
        locationEvent: zod_1.z.string({ required_error: 'locationEvent is required' }),
        shortDisc: zod_1.z.string({ required_error: "shortDisc is required" }),
        image: zod_1.z.string({ required_error: 'image is required' })
    })
});
exports.updateEventByAdminSchema = zod_1.z.object({
    body: zod_1.z.object({
        eventName: zod_1.z.string({ required_error: 'eventName is required', }),
        dateEvent: zod_1.z.string({ required_error: 'DateEvent is required' }),
        locationCity: zod_1.z.string({ required_error: 'LocationCity is required' }),
        locationEvent: zod_1.z.string({ required_error: 'locationEvent is required' }),
        shortDisc: zod_1.z.string({ required_error: "shortDisc is required" }),
        image: zod_1.z.string({ required_error: 'image is required' })
    }),
    params: zod_1.z.object({
        EventByAdminName: zod_1.z.string({ required_error: 'Ticket is required' })
    })
});
exports.deleteEventByAdminSchema = zod_1.z.object({
    params: zod_1.z.object({
        eventName: zod_1.z.string({ required_error: 'eventName is required' })
    })
});
exports.getByNameEventByAdminSchema = zod_1.z.object({
    params: zod_1.z.object({
        ticketid: zod_1.z.string({ required_error: 'eventName is required' }),
    })
});
