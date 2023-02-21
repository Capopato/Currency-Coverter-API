import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import config from "../config/config";

export const validateRate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    rateSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(500).json(error.issues);
    }
  }
};

export const rateSchema = z.object({
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
});

export type rateSchema = z.infer<typeof rateSchema>;
