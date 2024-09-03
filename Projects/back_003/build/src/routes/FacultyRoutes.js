"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FacultyController_1 = __importDefault(require("../controllers/FacultyController"));
class FacultiesRoutes {
    constructor() {
        this.RouteFacultyApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RouteFacultyApi.get('/iwantthemnow', FacultyController_1.default.giveMeFaculties);
    }
}
const facultiesRoutes = new FacultiesRoutes();
exports.default = facultiesRoutes.RouteFacultyApi;
