import { User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import * as argon2 from 'argon2'
import { deleteUserSchemaType, updateUserSchemaType } from "../zodSchema/User.zodSchema";
import * as jwt from 'jsonwebtoken'

export const getAllUsersHandler = async(req:Request,res:Response)=>{
    try{
        const allUsers = await prisma.user.findMany();
        return res.status(201).json(allUsers)
    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error'})
    }
     
}


export const registerHandler = async(req:Request,res:Response)=>{
    try{
        const addUser = req.body as User
        const hashedPass = await argon2.hash(addUser.password)
        addUser.password = hashedPass
        await prisma.user.create({
          data:addUser
    })
        return res.status(201).json({message:'Add new user'})

    }catch(error){
        console.log(error)
        return res.status(400).json({message:"Server Error !"})
    }
}

export const deleteUserHandler = async(req:Request,res:Response)=>{
    try{
        const {userId} = req.params as deleteUserSchemaType
        await prisma.user.delete({
            where:{id:userId}
        })
        return res.status(200).json({message:'deleted'})
    }catch(error){
        console.log(error)
        return res.status(400).json('Server Error !')
    }
}

export const updateUserHandler = async(req:Request,res:Response)=>{
    try{
        const updateDataUser = req.body as User;
        const {userId} = req.params as updateUserSchemaType;
        await prisma.user.updateMany({
            where:{id:userId},
            data:updateDataUser
        });
        return res.status(201).json({message:"Updated"})
    }catch(error){
        console.log(error)
        return res.status(400).json('Server Error !')
    }
}


export const loginHandler = async(req:Request,res:Response)=>{
    try{
        const {username,password} = req.body as User
        const user = await prisma.user.findUnique({
            where:{username}
        });

        if(!user){
            return res.status(400).json({message:"Wrong username or password"})
        };

        const isMatched = await argon2.verify(user.password,password)
        if(!isMatched){
            return res.status(400).json({message:"Wrong username or password"});
        }

        const token = jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET as string);
        return res.status(201).json({message:`Welcome ${user.username} !`,token})

    }catch(error){
        console.log(error)
        return res.status(400).json({message:'Server Error !'})
    }
}