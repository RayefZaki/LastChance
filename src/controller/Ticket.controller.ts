import { Ticket } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { IUser } from '../middlewares/auth';
import {
  deleteTicketSchemaType,
  updateTicketSchemaType,
} from '../zodSchema/Ticket.zodSchema';

export const getAllTicketsHandler = async (req: Request, res: Response) => {
  const user = req.body as Ticket;

  const Ticket = await prisma.ticket.findMany({
    where: { user_id: user.id },
  });

  return res.status(200).json(Ticket);

};

export const getTicketsEventByAdmin_idHandler = async (req: Request, res: Response) => {
  const {ticketid} = req.params as deleteTicketSchemaType ;
  // const user = res.locals.user as Ticket;


  const Tickets = await prisma.ticket.findMany({
    where: { eventByAdmin_id:ticketid},
  });

  return res.status(200).json(Tickets);
};

export const getTicketsByIdHandler = async (req: Request, res: Response) => {
  const {ticketid} = req.params as deleteTicketSchemaType ;
  // const user = res.locals.user as Ticket;


  const Tickets = await prisma.ticket.findMany({
    where: { id:ticketid},
  });

  return res.status(200).json(Tickets);
};



export const addTicketHandler = async (req: Request, res: Response) => {
  try{
  const { type,numberOfTicket,price,image,seatsLocation,eventByAdmin_id} = req.body as Ticket;
  const user = res.locals.user as IUser;
// const {eventid} = req.params as any  
  await prisma.ticket.create({
    data: {
      type,
      numberOfTicket,
      price,
      user_id: user.id,
      eventByAdmin_id,
      image,
      seatsLocation,
    },
  });

  return res.status(201).json({
    message: 'New Ticket created for user : ' + user.id,
  });
 }catch(error){
return res.status(500).json({message:"Server Error"})
 }
};
// eventByAdmin_id
export const updateTicketHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user as IUser;
    const updatedBlog = req.body as Ticket;
    const { ticketid } = req.params as updateTicketSchemaType;
    
    const isUpdated = await prisma.ticket.updateMany({
      where: {
        id: ticketid,
        user_id: user.id,
      },
      data: updatedBlog,
    });

    if (isUpdated.count == 0) {
      return res.status(400).json({
        message: 'Invalid Ticket id',
      });
    }

    return res.status(200).json({
      message: 'Ticket updated !',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error !',
    });
  }
};

export const deleteTicketHandler = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser;
  const { ticketid } = req.params as deleteTicketSchemaType;

  const deleteCount = await prisma.ticket.deleteMany({
    where: {
      id: ticketid,
      user_id: user.id,
    },
  });

  if (deleteCount.count == 0) {
    return res.status(400).json({
      message: 'Invalid Ticket id',
    });
  }

  return res.status(200).json({
    message: 'Ticket deleted !',
  });
};