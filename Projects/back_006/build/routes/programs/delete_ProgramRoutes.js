"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const delete_ProgramController_1 = __importDefault(require("../../controllers/programs/delete_ProgramController"));
class Read_ProgramRoutes {
    constructor() {
        this.routeReadProgramApi = (0, express_1.Router)();
    }
    settings() {
        this.routeReadProgramApi.delete('/delete/:code', delete_ProgramController_1.default.delete);
    }
}
const read_ProgramRoutes = new Read_ProgramRoutes();
exports.default = read_ProgramRoutes.routeReadProgramApi;
