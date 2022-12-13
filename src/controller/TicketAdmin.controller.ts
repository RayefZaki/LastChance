import { TicketAdmin } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import { deleteTicketAdminSchemaType, getByNameTicketAdminSchemaType, updateTicketAdminSchemaType } from "../zodSchema/TicketAdmin.zodSchema";

export const getTicketAdminHandler = async(req:Request,res:Response)=>{
    try{
    const allTickets = await prisma.ticketAdmin.findMany()
    return res.status(200).json(allTickets)
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }
}

export const getByNameTicketAdminHandler = async(req:Request,res:Response)=>{
    try{
    let {eventName} = req.params as getByNameTicketAdminSchemaType
   const event =  await prisma.ticketAdmin.findFirst({
        where:{ eventName:eventName }
    })
    return res.status(201).json(event)
    
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }
}

export const addTicketAdminHandler = async(req:Request,res:Response)=>{
    try{
        const addTicketAdmin = req.body as TicketAdmin
        await prisma.ticketAdmin.create({
            data:addTicketAdmin
        })
        return res.status(201).json({message:'Add TicketAdmin'})
        }catch(error){
            console.log(error)
            return res.status(400).json({message:'Server Error'})
        }
}

export const updateTicketAdminHandler = async(req:Request,res:Response)=>{
    try{
        const updateTicketAdmen = req.body as TicketAdmin
    const {ticketAdminName} = req.params as updateTicketAdminSchemaType;
    
    await prisma.ticketAdmin.update({
        where:{eventName:ticketAdminName},
        data:updateTicketAdmen
    })
    return res.status(201).json({message:'Updated'})
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }

}

export const deleteTicketAdminHandler = async(req:Request,res:Response)=>{
    try{
        const {eventName} = req.params as deleteTicketAdminSchemaType;
        await prisma.ticketAdmin.deleteMany({
            where:{eventName:eventName}
        })
        return res.status(200).json({message:'deleted'})
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }
    
    
}

