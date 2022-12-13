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
        password: zod_1.z.string({ required_error: 'Password is required' }).min(8, 'Password must be less than 8'),
        IBAN: zod_1.z.string({ required_error: 'IBAN is required' })
            .min(24, 'IBAN must be less than 24')
            .max(24, 'IBAN must be greater than 24')
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
        IBAN: zod_1.z.string({ required_error: 'IBAN is required' })
            .min(24, 'IBAN must be less than 24')
            .max(24, 'IBAN must be greater than 24')
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
