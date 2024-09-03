"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_SubjectController_1 = __importDefault(require("../../controllers/subjects/Create_SubjectController"));
const Read_SubjectController_1 = __importDefault(require("../../controllers/subjects/Read_SubjectController"));
const Update_SubjectController_1 = __importDefault(require("../../controllers/subjects/Update_SubjectController"));
const Delete_SubjectController_1 = __importDefault(require("../../controllers/subjects/Delete_SubjectController"));
class SubjectsRoutes {
    constructor() {
        this.RouteSubjectApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RouteSubjectApi.post('/subjects/create', Create_SubjectController_1.default.saveSubj);
        this.RouteSubjectApi.get('/subjects', Read_SubjectController_1.default.listSubj);
        this.RouteSubjectApi.get('/getsubject/:theCode', Read_SubjectController_1.default.searchSubj);
        this.RouteSubjectApi.put('/subjects/update', Update_SubjectController_1.default.updateSubj);
        this.RouteSubjectApi.delete('/getsubject/:theCode', Delete_SubjectController_1.default.deleteSubj);
    }
}
const subjectsRoutes = new SubjectsRoutes();
exports.default = subjectsRoutes.RouteSubjectApi;
