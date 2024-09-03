"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_SemesterDAO_1 = __importDefault(require("../../daos/semesters/Create_SemesterDAO"));
const Create_Semester_sql_1 = require("../../repositories/semesters/Create_Semester_sql");
const Read_Semester_sql_1 = require("../../repositories/semesters/Read_Semester_sql");
class Create_Semester_Controller extends Create_SemesterDAO_1.default {
    saveSem(req, res) {
        const name = req.body.semesterName;
        const parameter = [name];
        Create_Semester_Controller.createSemesters(Read_Semester_sql_1.READ_SQL_SEMESTER.CONFIRM, Create_Semester_sql_1.CREATE_SQL_SEMESTER.CREATE, parameter, res);
    }
    ;
}
const create_Semester_Controller = new Create_Semester_Controller();
exports.default = create_Semester_Controller;
