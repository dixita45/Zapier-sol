import { Router } from "express";
import { authMiddleware } from "../middleware";
import { zapCreateSchema } from "../types";
import { prismaclient } from "../db";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id: string = req.id;
  const body = req.body;
  const parseddata = zapCreateSchema.safeParse(body);

  if (!parseddata.success) {
    return res.status(411).json({
      message: "Incorrect Inputs",
    });
  }

  const zapId=await prismaclient.$transaction(async (tx) => {
    const zap = await prismaclient.zap.create({
      data: {
        userId: parseInt(id),
        triggerId: "",
        actions: {
          create: parseddata.data.actions.map((x, index) => ({
            actionId: x.availableactionId,
            sortingOrder: index,
          })),
        },
      },
    });

    const trigger = await tx.trigger.create({
      data: {
        triggerId: parseddata.data.availabletriggerId,
        zapId: zap.id,
      },
    });

    await tx.zap.update({
      where: {
        id: zap.id,
      },
      data: {
        triggerId: trigger.id,
      },
    });

    return zap.id;
  });

  return res.json({
    zapId
  })
});

router.get("/", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;
  const zaps = await prismaclient.zap.findMany({
    where: {
      userId: id,
    },
    include: {
      actions: {
        include: {
          type: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });
  console.log("zap handler");
  return res.json({
    zaps,
  });
});

router.get("/:zapId", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;
  const zapId = req.params.id;
  const zap = await prismaclient.zap.findFirst({
    where: {
      id: zapId,
      userId: id,
    },
    include: {
      actions: {
        include: {
          type: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });

  return res.json({
    zap,
  });
});

export const zapRouter = router;
