
import { z } from "zod";

export const addEventByAdminSchema = z.object({
    body:z.object({
        eventName:z.string({required_error:'eventName is required'}),
        dateEvent:z.date({required_error:'DateEvent is required'}),
        locationCity:z.string({required_error:'LocationCity is required'}),
        locationEvent:z.string({required_error:'locationEvent is required'}),
        shortDisc:z.string({required_error:"shortDisc is required"}),
        image:z.string({required_error:'image is required'})
    })
})

export const updateEventByAdminSchema = z.object({
    body:z.object({
        eventName:z.string({required_error:'eventName is required',}),
        dateEvent:z.string({required_error:'DateEvent is required'}),
        locationCity:z.string({required_error:'LocationCity is required'}),
        locationEvent:z.string({required_error:'locationEvent is required'}),
        shortDisc:z.string({required_error:"shortDisc is required"}),
        image:z.string({required_error:'image is required'})
    }),
    params:z.object({
        EventByAdminName:z.string({required_error:'Ticket is required'})
    })
})


export const deleteEventByAdminSchema = z.object({
    params:z.object({
        eventName:z.string({required_error:'eventName is required'})
    })
})


export const getByNameEventByAdminSchema = z.object({
    params:z.object({
        ticketid:z.string({required_error:'eventName is required'}),
    })
})


export type updateEventByAdminSchemaType = z.infer <typeof updateEventByAdminSchema>['params']

export type deleteEventByAdminSchemaType = z.infer <typeof deleteEventByAdminSchema>['params']

export type getByNameEventByAdminSchemaType = z.infer <typeof getByNameEventByAdminSchema>['params']