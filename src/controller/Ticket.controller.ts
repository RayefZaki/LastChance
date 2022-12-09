import { Request, Response } from "express";
import { Ticket } from "@prisma/client";
import { prisma } from "../config/db";

export const getAllTicketHandler = async(req:Request,res:Response)=>{
    try{
        const allTickets = await prisma.ticket.findMany()
        return res.status(200).json(allTickets)
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error !'})
    }
}

export const addTicketHandler = (req:Request,res:Response)=>{

}