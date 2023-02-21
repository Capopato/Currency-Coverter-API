import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import config from "../config/config";

export const validateConvert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    convertSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(500).json(error.issues);
    }
  }
};

export const convertSchema = z.object({
  from: z
    .string()
    .min(3)
    .max(3)
    .refine((val) => Object.values(config.currencies).includes(val), { message: "Selected currency is not available. Try again." }),
  to: z
    .string()
    .min(3)
    .max(3)
    .refine((val) => Object.values(config.currencies).includes(val), { message: "Selected currency is not available. Try again." }),
  amount: z.number(),
});

export type convertSchema = z.infer<typeof convertSchema>;
