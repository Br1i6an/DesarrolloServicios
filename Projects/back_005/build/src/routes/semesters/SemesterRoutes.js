"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_SemesterController_1 = __importDefault(require("../../controllers/semesters/Create_SemesterController"));
const Read_SemesterController_1 = __importDefault(require("../../controllers/semesters/Read_SemesterController"));
const Update_SemesterController_1 = __importDefault(require("../../controllers/semesters/Update_SemesterController"));
const Delete_SemesterController_1 = __importDefault(require("../../controllers/semesters/Delete_SemesterController"));
class SemestersRoutes {
    constructor() {
        this.RouteSemesterApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RouteSemesterApi.post('/semesters/create', Create_SemesterController_1.default.saveSem);
        this.RouteSemesterApi.get('/semesters', Read_SemesterController_1.default.listSem);
        this.RouteSemesterApi.get('/getsemester/:theCode', Read_SemesterController_1.default.searchSem);
        this.RouteSemesterApi.put('/semesters/update', Update_SemesterController_1.default.updateSem);
        this.RouteSemesterApi.delete('/getsemester/:theCode', Delete_SemesterController_1.default.deleteSem);
    }
}
const semestersRoutes = new SemestersRoutes();
exports.default = semestersRoutes.RouteSemesterApi;
