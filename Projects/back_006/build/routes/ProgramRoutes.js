"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_ProgramController_1 = __importDefault(require("../controllers/programs/create_ProgramController"));
const delete_ProgramController_1 = __importDefault(require("../controllers/programs/delete_ProgramController"));
const read_ProgramController_1 = __importDefault(require("../controllers/programs/read_ProgramController"));
const update_ProgramController_1 = __importDefault(require("../controllers/programs/update_ProgramController"));
class ProgramRoutes {
    constructor() {
        this.routeProgramApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeProgramApi.post('/setprogram', create_ProgramController_1.default.create);
        this.routeProgramApi.get('/getprograms', read_ProgramController_1.default.getPrograms);
        this.routeProgramApi.get('/getprogram/:code', read_ProgramController_1.default.find);
        this.routeProgramApi.delete('/getprogram/:code', delete_ProgramController_1.default.delete);
        this.routeProgramApi.put('/setprograms/update', update_ProgramController_1.default.update);
    }
}
const programRoutes = new ProgramRoutes();
exports.default = programRoutes.routeProgramApi;
