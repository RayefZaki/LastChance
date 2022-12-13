import express from 'express';
import { addEventByAdminHandler, deleteEventByAdminHandler, getByNameEventByAdminHandler, getEventByAdminHandler, updateEventByAdminHandler } from '../controller/EventByAdmin.controller';
import validate from '../middlewares/validate';
import { addEventByAdminSchema, deleteEventByAdminSchema, getByNameEventByAdminSchema, updateEventByAdminSchema } from '../zodSchema/EventByAdmin.zodSchema';

const EventByAdminRouter = express.Router()

EventByAdminRouter.get('/',getEventByAdminHandler);
EventByAdminRouter.get('/:eventName',validate(getByNameEventByAdminSchema),getByNameEventByAdminHandler);
EventByAdminRouter.post('/',validate(addEventByAdminSchema),addEventByAdminHandler);
EventByAdminRouter.put('/:EventByAdminName',validate(updateEventByAdminSchema),updateEventByAdminHandler);
EventByAdminRouter.delete('/:eventName',validate(deleteEventByAdminSchema),deleteEventByAdminHandler);

export default EventByAdminRouter;