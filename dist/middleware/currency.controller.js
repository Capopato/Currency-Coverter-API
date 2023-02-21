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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestRate = exports.convertCurrecy = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config/config"));
const validateInput_middleware_1 = require("../middleware/validateInput.middleware");
const convertCurrecy = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const isFromValid = (0, validateInput_middleware_1.validateInput)(from);
    const isToValid = (0, validateInput_middleware_1.validateInput)(to);
    if (!isFromValid || !isToValid) {
        console.log("Invalid input. Try again.");
        return;
    }
    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
    const response = yield axios_1.default.get(url, config_1.default.header);
    const data = yield response.data;
    console.log(data);
    return data;
});
exports.convertCurrecy = convertCurrecy;
const latestRate = (from, to) => __awaiter(void 0, void 0, void 0, function* () {
    const isFromValid = (0, validateInput_middleware_1.validateInput)(from);
    const isToValid = (0, validateInput_middleware_1.validateInput)(to);
    if (!isFromValid || !isToValid) {
        console.log("Invalid input. Try again.");
        return;
    }
    const url = `https://api.apilayer.com/exchangerates_data/latest?symbols=${to}&base=${from}`;
    const response = yield axios_1.default.get(url, config_1.default.header);
    const data = yield response.data;
    console.log(data);
});
exports.latestRate = latestRate;
// console.log(config.header.headers.apikey);
// console.log(config.accessToken);
(0, exports.convertCurrecy)("EUeR", "USD", 100);
(0, exports.latestRate)("EUrqR", "USD");
