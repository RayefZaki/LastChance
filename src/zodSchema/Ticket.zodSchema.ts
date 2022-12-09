import { z } from "zod";

export const addTicketSchema = z.object({
    body:z.object({
        type:z.enum(["Regular","Silver","Gold"],{required_error:"Type is required"}),
        numberOfTicket:z.number({required_error:'Number of ticket is required'})
        .min(0,'Number of ticket must be more than 0'),
        price:z.number({required_error:'Price is required'}),
        IBAN:z.string({required_error:'IBAN is required'})
    })
})