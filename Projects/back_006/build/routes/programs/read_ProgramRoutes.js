"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const read_ProgramController_1 = __importDefault(require("../../controllers/programs/read_ProgramController"));
class Read_ProgramRoutes {
    constructor() {
        this.routeReadProgramApi = (0, express_1.Router)();
    }
    settings() {
        this.routeReadProgramApi.get('/read/getprograms', read_ProgramController_1.default.getPrograms);
        this.routeReadProgramApi.get('/read/find/:code', read_ProgramController_1.default.find);
    }
}
const read_ProgramRoutes = new Read_ProgramRoutes();
exports.default = read_ProgramRoutes.routeReadProgramApi;
