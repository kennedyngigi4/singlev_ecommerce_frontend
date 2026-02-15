import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


export const registerSchema = z.object({
    fullname: z.string().min(4, "Full name should be at least 4 characters"),
    email: z.email("Invalid email address"),
    phone: z.string(),
    password: z.string()
        .min(8, "Password must be at least 8 characters.")
        .max(30, "Password must not exceed 30 characters.")
})


export const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters.")
        .max(30, "Password must not exceed 30 characters.")
})



export const checkoutSchema = z.object({
    mpesa_number: z.string().min(10, "Mpesa number is required"),
    
})


export const orderPaymentSchema = z.object({
    mpesa_number: z.string().min(10, "Mpesa number is required"),
    order_id: z.string().min(8, "Order ID is required"),
    total_amount: z.string().min(1, "Amount is required"),
})


