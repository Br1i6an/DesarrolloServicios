"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeacherController_1 = __importDefault(require("../controllers/TeacherController"));
class TeachersRoutes {
    constructor() {
        this.RouteTeacherApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RouteTeacherApi.get('/iwantthemnow', TeacherController_1.default.giveMeTeachers);
    }
}
const teachersRoutes = new TeachersRoutes();
exports.default = teachersRoutes.RouteTeacherApi;
