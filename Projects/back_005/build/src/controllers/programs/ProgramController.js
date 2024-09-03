"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramDAO_1 = __importDefault(require("../../daos/programs/ProgramDAO"));
class ProgramController extends ProgramDAO_1.default {
}
const programController = new ProgramController();
exports.default = programController;
