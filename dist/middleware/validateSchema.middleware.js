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
exports.rateSchema = exports.validateRate = exports.convertSchema = exports.validateConvert = void 0;
const zod_1 = require("zod");
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
    from: zod_1.z.string().min(3).max(3),
    to: zod_1.z.string().min(3).max(3),
    amount: zod_1.z.number(),
});
const validateRate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        exports.rateSchema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(500).json(error.issues);
        }
    }
});
exports.validateRate = validateRate;
exports.rateSchema = zod_1.z.object({
    from: zod_1.z.string().min(3).max(3),
    to: zod_1.z.string().min(3).max(3),
});
