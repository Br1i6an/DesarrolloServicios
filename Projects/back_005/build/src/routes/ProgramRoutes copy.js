"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramController_1 = __importDefault(require("../controllers/ProgramController"));
class ProgramsRoutes {
    constructor() {
        this.RouteProgramApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RouteProgramApi.get('/iwantthemnow', ProgramController_1.default.giveMePrograms);
        this.RouteProgramApi.post('/iwantthemnow/create', ProgramController_1.default.savePrograms);
        this.RouteProgramApi.get('/getprogram/:theCode', ProgramController_1.default.searchOneMan);
        this.RouteProgramApi.delete('/getprogram/:theCode', ProgramController_1.default.deleteOneMan);
    }
}
const programsRoutes = new ProgramsRoutes();
exports.default = programsRoutes.RouteProgramApi;
