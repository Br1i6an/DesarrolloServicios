"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SubjectPensumController_1 = __importDefault(require("../controllers/SubjectPensumController"));
class SubjectPensumRoutes {
    constructor() {
        this.routeSubjectPensumApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeSubjectPensumApi.get('/getsubjectpensum', SubjectPensumController_1.default.getSubjectPensum);
    }
}
const subjectPensumRoutes = new SubjectPensumRoutes();
exports.default = subjectPensumRoutes.routeSubjectPensumApi;
