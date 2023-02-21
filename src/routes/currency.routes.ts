import express from "express";
import { convert, latestRate } from "../controllers/currency.controller";
import { validateConvert } from "../middleware/validateConvert.middleware";
import { validateRate } from "../middleware/validateRate.middleware";

const router = express.Router();

router.post("/latestRate", validateRate, latestRate);
router.post("/convertCurrency", validateConvert, convert);

export default router;
