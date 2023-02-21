"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const accessToken = process.env.ACCESSTOKEN || "";
const port = process.env.port || 3001;
const header = {
    headers: {
        apikey: process.env.ACCESSTOKEN,
    },
};
const currencies = {
    AustralianDollar: "AUD",
    Real: "BRL",
    Lev: "BGN",
    CanadianDollar: "CAD",
    Pound: "GBP",
    Dollar: "USD",
    Euro: "EUR",
    Yuan: "CNH",
    JapaneseYen: "JPY",
};
exports.default = {
    accessToken,
    port,
    header,
    currencies,
};
