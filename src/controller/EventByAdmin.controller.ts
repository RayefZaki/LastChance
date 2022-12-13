import { EventByAdmin } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import { deleteEventByAdminSchemaType, getByNameEventByAdminSchemaType, updateEventByAdminSchemaType } from "../zodSchema/EventByAdmin.zodSchema";

export const getEventByAdminHandler = async(req:Request,res:Response)=>{
    try{
    const allTickets = await prisma.eventByAdmin.findMany()
    return res.status(200).json(allTickets)
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }
}

export const getByNameEventByAdminHandler = async(req:Request,res:Response)=>{
    try{
    let {eventName} = req.params as getByNameEventByAdminSchemaType
   const event =  await prisma.eventByAdmin.findFirst({
        where:{ eventName:eventName }
    })
    return res.status(201).json(event)
    
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }
}

export const addEventByAdminHandler = async(req:Request,res:Response)=>{
    try{
        const addEventByAdmin = req.body as EventByAdmin
        await prisma.eventByAdmin.create({
            data:addEventByAdmin
        })
        return res.status(201).json({message:'Add EventByAdmin'})
        }catch(error){
            console.log(error)
            return res.status(400).json({message:'Server Error'})
        }
}

export const updateEventByAdminHandler = async(req:Request,res:Response)=>{
    try{
        const updateTicketAdmen = req.body as EventByAdmin
    const {EventByAdminName} = req.params as updateEventByAdminSchemaType;
    
    await prisma.eventByAdmin.update({
        where:{eventName:EventByAdminName},
        data:updateTicketAdmen
    })
    return res.status(201).json({message:'Updated'})
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }

}

export const deleteEventByAdminHandler = async(req:Request,res:Response)=>{
    try{
        const {eventName} = req.params as deleteEventByAdminSchemaType;
        await prisma.eventByAdmin.deleteMany({
            where:{eventName:eventName}
        })
        return res.status(200).json({message:'deleted'})
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }
    
    
}

