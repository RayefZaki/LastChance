import { z } from "zod";

export const addTicketSchema = z.object({
    body:z.object({
        type:z.string({required_error:"Type is required",invalid_type_error:"String"}),
        numberOfTicket:z.number({required_error:'Number of ticket is required',invalid_type_error:"Number"})
        .min(0,'Number of ticket must be more than 0'),
        price:z.number({required_error:'Price is required',invalid_type_error:'Number'}),
        image:z.string({required_error:'image is required',invalid_type_error:"String"}),
        seatsLocation:z.string({required_error:'seatsLocation is required',invalid_type_error:"String"})
    })
})


export const updateTicketSchema = z.object({
  body: z.object({
    type:z.enum(["Regular","Silver","Gold"],{required_error:"Type is required"}),
    numberOfTicket:z.number({required_error:'Number of ticket is required'})
    .min(0,'Number of ticket must be more than 0'),
    price:z.number({required_error:'Price is required'})
  }),
  params: z.object({
    ticketid: z.string({
      required_error: 'id is required !',
      invalid_type_error: 'ticket id must be a string',
    }),
  }),
});

export const deleteTicketSchema = z.object({
  params: z.object({
    ticketid: z.string({
      required_error: 'id is required !',
      invalid_type_error: 'ticket id must be a string',
    }),
  }),
});

export type deleteTicketSchemaType = z.infer<typeof deleteTicketSchema>['params'];

export type updateTicketSchemaType = z.infer<typeof updateTicketSchema>['params'];