import * as z from "zod";


export const signUpValidationSchema = z.object({
    firstName : z.string().min(2, {message: "Too Short"}).max(50,  'Too big less than 50 character please'),
    lastName : z.string(),
    username : z.string().min(2, {message: "Too Short"}),
    email : z.string().email(),
    password : z.string().min(8, {message: "password must be of minimum 8 characters"}),
})
export const signInValidationSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8, {message: "password must be of minimum 8 characters"}),
})
export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
  });

export const postValidationSchema = z.object({
    caption : z.string().min(3, {message: "Too Short"}).max(2000,  'Too big less than 50 character please'),
    location : z.string().min(3, {message: "Too Short"}).max(2000,  'Too big less than 50 character please'),
    file : z.custom<File[]>(),
    tags : z.string(),
    
})