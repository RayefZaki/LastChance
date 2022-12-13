import { type } from "os";
import { z } from "zod";

export const addUserSchema = z.object({
    body:z.object({
        username:z.string({required_error:'Username is required',invalid_type_error:"Please enter chars"})
        .min(2,'Username must be more than 2')
        .max(15,'Username must be less than 15'),
        email:z.string({required_error:'Email is required',invalid_type_error:"Please enter chars"})
        .email()
        .min(2,'Username must be more than 2')
        .max(25,'Username must be less than 25'),
        password:z.string({required_error:'Password is required'})
        .min(8,'Password must be less than 8'),
        firstName:z.string({required_error:'First Name is required',invalid_type_error:"Please enter chars"})
        .min(2,'First Name must be more than 2')
        .max(15,'First Name must be less than 15'),
        lastName:z.string({required_error:'Last Name is required',invalid_type_error:"Please enter chars"})
         .min(2,'Last Name must be more than 2')
        .max(15,'Last Name must be less than 15'),
        mobileNumber:z.string().min(10,'Mobile Number must be 10 numbers').max(10,'Mobile Number must be 10 numbers'),


    })
})

export const deleteUserSchema = z.object({
    params:z.object({
        userId:z.string()
    })
})

export type deleteUserSchemaType = z.infer <typeof deleteUserSchema>['params'];

export const updateUserSchema = z.object({
    body:z.object({
        username:z.string({required_error:'Username is required',invalid_type_error:"Please enter chars"})
        .min(2,'Username must be more than 2')
        .max(15,'Username must be less than 15'),
        email:z.string({required_error:'Email is required',invalid_type_error:"Please enter chars"})
        .email()
        .min(2,'Username must be more than 2')
        .max(25,'Username must be less than 25'),
        password:z.string({required_error:'Password is required'})
        .min(8,'Password must be less than 8'),
        firstName:z.string({required_error:'First Name is required',invalid_type_error:"Please enter chars"})
        .min(2,'First Name must be more than 2')
        .max(15,'First Name must be less than 15'),
        lastName:z.string({required_error:'Last Name is required',invalid_type_error:"Please enter chars"})
         .min(2,'Last Name must be more than 2')
        .max(15,'Last Name must be less than 15'),
        mobileNumber:z.string().min(10,'Mobile Number must be 10 numbers').max(10,'Mobile Number must be 10 numbers'),
        

    }),
    params:z.object({
        userId:z.string()
    })
})

export type updateUserSchemaType = z.infer <typeof updateUserSchema>['params'];

export const loginSchema = z.object({
    body:z.object({
        username:z.string({required_error:'Username is required',invalid_type_error:"Please enter chars"})
        .min(2,'Username must be more than 2')
        .max(15,'Username must be less than 15'),
        password:z.string({required_error:'Password is required'})
    })
})