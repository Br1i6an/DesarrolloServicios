"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FacultyDAO_1 = __importDefault(require("../daos/FacultyDAO"));
const faculty_sql_1 = require("../repositories/faculty_sql");
class FacultyController extends FacultyDAO_1.default {
    giveMeFaculties(req, res) {
        FacultyController.getFacul(faculty_sql_1.SQL_FACULTY.ALL, [], res);
    }
}
const facultyController = new FacultyController();
exports.default = facultyController;
