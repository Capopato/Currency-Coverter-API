"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestRate = exports.convert = void 0;
const currency_fetch_1 = require("../fetch/currency.fetch");
const convert = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const from = req.body.from;
    const to = req.body.to;
    const amount = req.body.amount;
    try {
        const response = yield (0, currency_fetch_1.convertCurrecy)(from, to, amount);
        console.log(response);
        res.status(200).json({ response });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.convert = convert;
const latestRate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const from = req.body.from;
    const to = req.body.to;
    try {
        const response = yield (0, currency_fetch_1.latestRateCalculator)(from, to);
        console.log(response);
        res.status(200).json({ response });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});
exports.latestRate = latestRate;
