import { Router } from "express";
import { authMiddleware } from "../middleware";
import { signupSchema, signinSchema } from "../types";
import { prismaclient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

const router = Router();

router.post("/signup", async (req, res) => {
  const body = req.body;
  const parsedData = signupSchema.safeParse(body);
  
  if (!parsedData.success) {
    return res.status(411).json({
      message: "Incorrect Inputs",
    });
  }

  const userExist = await prismaclient.user.findFirst({
    where: {
      email: parsedData.data.username,
    },
  });

  if (userExist) {
    return res.status(403).json({
      message: "User already Exits",
    });
  }

  await prismaclient.user.create({
    data: {
      email: parsedData.data.username,
      password: parsedData.data.password,
      name: parsedData.data.name,
    },
  });

  return res.json({
    message: "Please verify your Acoount by checking your email",
  });
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  const parsedData = signinSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(403).json({
      message: "Incorrect Inputs",
    });
  }

  const user = await prismaclient.user.findFirst({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });

  if (!user) {
    return res.status(403).json({
      message: "Sorry, Creadentials are wrong",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_PASSWORD
  );

  res.json({
    token: token,
  });
});

router.get("/", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;
  const user = await prismaclient.user.findFirst({
    where: {
      id,
    },
    select: {
      name: true,
      email: true,
    },
  });

  return res.json({
    user
  })
});

export const userRouter = router;
