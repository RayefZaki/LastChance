import express from 'express';
import { addTicketAdminHandler, deleteTicketAdminHandler, getByNameTicketAdminHandler, getTicketAdminHandler, updateTicketAdminHandler } from '../controller/TicketAdmin.controller';
import validate from '../middlewares/validate';
import { addTicketAdminSchema, deleteTicketAdminSchema, getByNameTicketAdminSchema, updateTicketAdminSchema } from '../zodSchema/TicketAdmin.zodSchema';

const ticketAdminRouter = express.Router()

ticketAdminRouter.get('/',getTicketAdminHandler);
ticketAdminRouter.get('/:eventName',validate(getByNameTicketAdminSchema),getByNameTicketAdminHandler);
ticketAdminRouter.post('/',validate(addTicketAdminSchema),addTicketAdminHandler);
ticketAdminRouter.put('/:ticketAdminName',validate(updateTicketAdminSchema),updateTicketAdminHandler);
ticketAdminRouter.delete('/:eventName',validate(deleteTicketAdminSchema),deleteTicketAdminHandler);

export default ticketAdminRouter;