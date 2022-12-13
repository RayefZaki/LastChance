import express from 'express';
import { addTicketHandler, deleteTicketHandler, getAllTicketsHandler, updateTicketHandler } from '../controller/Ticket.controller';
import { protect } from '../middlewares/auth';
import validate from '../middlewares/validate';
import { addTicketSchema, deleteTicketSchema, updateTicketSchema } from '../zodSchema/Ticket.zodSchema';

const ticketRouter = express.Router()

ticketRouter.get('/',getAllTicketsHandler)
ticketRouter.post('/',validate(addTicketSchema),addTicketHandler)
ticketRouter.put('/:ticketid', protect, validate(updateTicketSchema), updateTicketHandler);
ticketRouter.delete('/:ticketid',protect,validate(deleteTicketSchema),deleteTicketHandler);


export default ticketRouter;
