
import { z } from "zod";

export const addTicketAdminSchema = z.object({
    body:z.object({
        eventName:z.string({required_error:'eventName is required'}),
        dateEvent:z.string({required_error:'DateEvent is required'}),
        locationCity:z.string({required_error:'LocationCity is required'}),
        locationEvent:z.string({required_error:'locationEvent is required'}),
        shortDisc:z.string({required_error:"shortDisc is required"}),

        image:z.string({required_error:'image is required'})
    })
})

export const updateTicketAdminSchema = z.object({
    body:z.object({
        eventName:z.string({required_error:'eventName is required'}),
        dateEvent:z.string({required_error:'DateEvent is required'}),
        locationCity:z.string({required_error:'LocationCity is required'}),
        locationEvent:z.string({required_error:'locationEvent is required'}),
        shortDisc:z.string({required_error:"shortDisc is required"}),
        image:z.string({required_error:'image is required'})
    }),
    params:z.object({
        ticketAdminName:z.string({required_error:'Ticket is required'})
    })
})


export const deleteTicketAdminSchema = z.object({
    params:z.object({
        eventName:z.string({required_error:'eventName is required'})
    })
})


export const getByNameTicketAdminSchema = z.object({
    params:z.object({
        eventName:z.string({required_error:'eventName is required'}),
    })
})


export type updateTicketAdminSchemaType = z.infer <typeof updateTicketAdminSchema>['params']

export type deleteTicketAdminSchemaType = z.infer <typeof deleteTicketAdminSchema>['params']

export type getByNameTicketAdminSchemaType = z.infer <typeof getByNameTicketAdminSchema>['params']