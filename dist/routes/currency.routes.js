"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const currency_controller_1 = require("../controllers/currency.controller");
const validateConvert_middleware_1 = require("../middleware/validateConvert.middleware");
const validateRate_middleware_1 = require("../middleware/validateRate.middleware");
const router = express_1.default.Router();
router.post("/latestRate", validateRate_middleware_1.validateRate, currency_controller_1.latestRate);
router.post("/convertCurrency", validateConvert_middleware_1.validateConvert, currency_controller_1.convert);
exports.default = router;
