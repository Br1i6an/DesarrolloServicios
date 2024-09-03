"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_SubjectController_1 = __importDefault(require("../controllers/subjects/create_SubjectController"));
const delete_SubjectController_1 = __importDefault(require("../controllers/subjects/delete_SubjectController"));
const read_SubjectController_1 = __importDefault(require("../controllers/subjects/read_SubjectController"));
const update_SubjectController_1 = __importDefault(require("../controllers/subjects/update_SubjectController"));
class SubjectRoutes {
    constructor() {
        this.routeSubjectApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeSubjectApi.get('/getsubjects', read_SubjectController_1.default.getSubjects);
        this.routeSubjectApi.post('/setsubject', create_SubjectController_1.default.create);
        this.routeSubjectApi.get('/getsubject/:code', read_SubjectController_1.default.find);
        this.routeSubjectApi.delete('/getsubject/:code', delete_SubjectController_1.default.delete);
        this.routeSubjectApi.put('/setsubject/update', update_SubjectController_1.default.update);
    }
}
const subjectRoutes = new SubjectRoutes();
exports.default = subjectRoutes.routeSubjectApi;
