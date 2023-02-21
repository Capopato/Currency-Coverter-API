"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
/**
 * Make function to check if input is valid.
 */
const config_1 = __importDefault(require("../config/config"));
const validateInput = (input) => {
    const valid = Object.values(config_1.default.currencies).includes(input);
    if (!valid) {
        return false;
    }
    return true;
};
exports.validateInput = validateInput;
