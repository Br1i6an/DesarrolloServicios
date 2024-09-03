"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_ProgramController_1 = __importDefault(require("../../controllers/programs/Create_ProgramController"));
const Read_ProgramController_1 = __importDefault(require("../../controllers/programs/Read_ProgramController"));
const Update_ProgramController_1 = __importDefault(require("../../controllers/programs/Update_ProgramController"));
const Delete_ProgramController_1 = __importDefault(require("../../controllers/programs/Delete_ProgramController"));
class ProgramsRoutes {
    constructor() {
        this.RouteProgramApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RouteProgramApi.post('/programs/create', Create_ProgramController_1.default.saveProg);
        this.RouteProgramApi.get('/programs', Read_ProgramController_1.default.listProg); //List yes
        this.RouteProgramApi.get('/getprogram/:theCode', Read_ProgramController_1.default.searchProg); //Search yes
        this.RouteProgramApi.put('/programs/update', Update_ProgramController_1.default.updateProg); // Update yes 
        this.RouteProgramApi.delete('/getprogram/:theCode', Delete_ProgramController_1.default.deleteProg); //Delete yes
    }
}
const programsRoutes = new ProgramsRoutes();
exports.default = programsRoutes.RouteProgramApi;
