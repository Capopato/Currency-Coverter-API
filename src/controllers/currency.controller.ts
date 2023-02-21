import { Request, Response, NextFunction } from "express";
import { convertCurrecy, latestRateCalculator } from "../fetch/currency.fetch";

export const convert = async (req: Request, res: Response, next: NextFunction) => {
  const from = req.body.from;
  const to = req.body.to;
  const amount = req.body.amount;

  try {
    const response = await convertCurrecy(from, to, amount);
    console.log(response);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const latestRate = async (req: Request, res: Response, next: NextFunction) => {
  const from = req.body.from;
  const to = req.body.to;

  try {
    const response = await latestRateCalculator(from, to);
    console.log(response);
    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
