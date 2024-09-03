"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SubjectController_1 = __importDefault(require("../controllers/SubjectController"));
class SubjectsRoutes {
    constructor() {
        this.RouteSubjectApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RouteSubjectApi.get('/iwantthemnow1', SubjectController_1.default.giveMeSubjects);
        this.RouteSubjectApi.post('/iwantthemnow/create1', SubjectController_1.default.saveSubjects);
        this.RouteSubjectApi.get('/getsubject/:theCode', SubjectController_1.default.searchOneMan);
        this.RouteSubjectApi.delete('/getsubject/:theCode', SubjectController_1.default.deleteOneMan);
    }
}
const subjectsRoutes = new SubjectsRoutes();
exports.default = subjectsRoutes.RouteSubjectApi;
