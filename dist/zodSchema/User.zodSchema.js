"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.updateUserSchema = exports.deleteUserSchema = exports.addUserSchema = void 0;
const zod_1 = require("zod");
exports.addUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: 'Username is required', invalid_type_error: "Please enter chars" })
            .min(2, 'Username must be more than 2')
            .max(15, 'Username must be less than 15'),
        email: zod_1.z.string({ required_error: 'Email is required', invalid_type_error: "Please enter chars" })
            .email()
            .min(2, 'Username must be more than 2')
            .max(25, 'Username must be less than 25'),
        password: zod_1.z.string({ required_error: 'Password is required' })
            .min(8, 'Password must be less than 8'),
        firstName: zod_1.z.string({ required_error: 'First Name is required', invalid_type_error: "Please enter chars" })
            .min(2, 'First Name must be more than 2')
            .max(15, 'First Name must be less than 15'),
        lastName: zod_1.z.string({ required_error: 'Last Name is required', invalid_type_error: "Please enter chars" })
            .min(2, 'Last Name must be more than 2')
            .max(15, 'Last Name must be less than 15'),
        mobileNumber: zod_1.z.string().min(10, 'Mobile Number must be 10 numbers').max(10, 'Mobile Number must be 10 numbers'),
    })
});
exports.deleteUserSchema = zod_1.z.object({
    params: zod_1.z.object({
        userId: zod_1.z.string()
    })
});
exports.updateUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: 'Username is required', invalid_type_error: "Please enter chars" })
            .min(2, 'Username must be more than 2')
            .max(15, 'Username must be less than 15'),
        email: zod_1.z.string({ required_error: 'Email is required', invalid_type_error: "Please enter chars" })
            .email()
            .min(2, 'Username must be more than 2')
            .max(25, 'Username must be less than 25'),
        password: zod_1.z.string({ required_error: 'Password is required' })
            .min(8, 'Password must be less than 8'),
        firstName: zod_1.z.string({ required_error: 'First Name is required', invalid_type_error: "Please enter chars" })
            .min(2, 'First Name must be more than 2')
            .max(15, 'First Name must be less than 15'),
        lastName: zod_1.z.string({ required_error: 'Last Name is required', invalid_type_error: "Please enter chars" })
            .min(2, 'Last Name must be more than 2')
            .max(15, 'Last Name must be less than 15'),
        mobileNumber: zod_1.z.string().min(10, 'Mobile Number must be 10 numbers').max(10, 'Mobile Number must be 10 numbers'),
    }),
    params: zod_1.z.object({
        userId: zod_1.z.string()
    })
});
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: 'Username is required', invalid_type_error: "Please enter chars" })
            .min(2, 'Username must be more than 2')
            .max(15, 'Username must be less than 15'),
        password: zod_1.z.string({ required_error: 'Password is required' })
    })
});
