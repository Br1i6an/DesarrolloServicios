"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_semesterController_1 = __importDefault(require("../controllers/semesters/create_semesterController"));
const delete_semesterController_1 = __importDefault(require("../controllers/semesters/delete_semesterController"));
const read_semesterController_1 = __importDefault(require("../controllers/semesters/read_semesterController"));
const update_semesterController_1 = __importDefault(require("../controllers/semesters/update_semesterController"));
class SemesterRoutes {
    constructor() {
        this.routeSemesterApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeSemesterApi.get('/getsemesters', read_semesterController_1.default.getSemesters);
        this.routeSemesterApi.get('/getsemester/:code', read_semesterController_1.default.find);
        this.routeSemesterApi.delete('/getsemester/:code', delete_semesterController_1.default.delete);
        this.routeSemesterApi.post('/setsemester', create_semesterController_1.default.create);
        this.routeSemesterApi.put('/setsemester/update', update_semesterController_1.default.update);
    }
}
const semesterRoutes = new SemesterRoutes();
exports.default = semesterRoutes.routeSemesterApi;
