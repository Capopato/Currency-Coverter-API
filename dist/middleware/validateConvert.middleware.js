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
exports.convertSchema = exports.validateConvert = void 0;
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config/config"));
const validateConvert = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        exports.convertSchema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(500).json(error.issues);
        }
    }
});
exports.validateConvert = validateConvert;
exports.convertSchema = zod_1.z.object({
    from: zod_1.z
        .string()
        .min(3)
        .max(3)
        .refine((val) => Object.values(config_1.default.currencies).includes(val), { message: "Selected currency is not available. Try again." }),
    to: zod_1.z
        .string()
        .min(3)
        .max(3)
        .refine((val) => Object.values(config_1.default.currencies).includes(val), { message: "Selected currency is not available. Try again." }),
    amount: zod_1.z.number(),
});
