"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTicketSchema = exports.updateTicketSchema = exports.addTicketSchema = void 0;
const zod_1 = require("zod");
exports.addTicketSchema = zod_1.z.object({
    body: zod_1.z.object({
        type: zod_1.z.string({ required_error: "Type is required" }),
        numberOfTicket: zod_1.z.number({ required_error: 'Number of ticket is required' })
            .min(0, 'Number of ticket must be more than 0'),
        price: zod_1.z.number({ required_error: 'Price is required' }),
        image: zod_1.z.string({ required_error: 'image is required' }),
        seatsLocation: zod_1.z.string({ required_error: 'seatsLocation is required' })
    })
});
exports.updateTicketSchema = zod_1.z.object({
    body: zod_1.z.object({
        type: zod_1.z.enum(["Regular", "Silver", "Gold"], { required_error: "Type is required" }),
        numberOfTicket: zod_1.z.number({ required_error: 'Number of ticket is required' })
            .min(0, 'Number of ticket must be more than 0'),
        price: zod_1.z.number({ required_error: 'Price is required' })
    }),
    params: zod_1.z.object({
        ticketid: zod_1.z.string({
            required_error: 'id is required !',
            invalid_type_error: 'ticket id must be a string',
        }),
    }),
});
exports.deleteTicketSchema = zod_1.z.object({
    params: zod_1.z.object({
        ticketid: zod_1.z.string({
            required_error: 'id is required !',
            invalid_type_error: 'ticket id must be a string',
        }),
    }),
});
