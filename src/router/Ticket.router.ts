import express from 'express';
import { addTicketHandler, getAllTicketHandler } from '../controller/Ticket.controller';
import validate from '../middlewares/validate';
import { addTicketSchema } from '../zodSchema/Ticket.zodSchema';

const ticketRouter = express.Router()

ticketRouter.get('/',getAllTicketHandler)
ticketRouter.post('/',validate(addTicketSchema),addTicketHandler)
