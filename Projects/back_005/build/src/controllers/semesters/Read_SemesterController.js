"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_SemesterDAO_1 = __importDefault(require("../../daos/semesters/Read_SemesterDAO"));
const Read_Semester_sql_1 = require("../../repositories/semesters/Read_Semester_sql");
class Read_Semester_Controller extends Read_SemesterDAO_1.default {
    listSem(req, res) {
        Read_Semester_Controller.getSemesters(Read_Semester_sql_1.READ_SQL_SEMESTER.LIST, [], res);
    }
    searchSem(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        Read_SemesterDAO_1.default.sortById(Read_Semester_sql_1.READ_SQL_SEMESTER.SEARCH, parameter, res);
    }
}
const read_Semester_Controller = new Read_Semester_Controller();
exports.default = read_Semester_Controller;
