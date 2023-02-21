"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSchema = void 0;
const zod_1 = require("zod");
exports.convertSchema = {
    from: zod_1.z.string().min(3).max(3),
    to: zod_1.z.string().min(3).max(3),
    amount: zod_1.z.number(),
};
