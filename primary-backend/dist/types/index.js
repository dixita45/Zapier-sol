"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zapCreateSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    username: zod_1.z.string().min(6),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().min(3)
});
exports.signinSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.zapCreateSchema = zod_1.z.object({
    availabletriggerId: zod_1.z.string(),
    triggermetaData: zod_1.z.any().optional(),
    actions: zod_1.z.array(zod_1.z.object({
        availableactionId: zod_1.z.string(),
        actionmetaData: zod_1.z.any().optional()
    }))
});
