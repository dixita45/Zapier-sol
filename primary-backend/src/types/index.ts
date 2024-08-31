import { z } from "zod";

export const signupSchema=z.object({
     username :z.string().min(6),
     password:z.string().min(6),
     name:z.string().min(3)
})

export const signinSchema=z.object({
    username :z.string(),
    password:z.string()
})

export const zapCreateSchema =z.object({
    availabletriggerId:z.string(),
    triggermetaData:z.any().optional(),
    actions:z.array(z.object({
        availableactionId:z.string(),
        actionmetaData:z.any().optional()
    }))
})