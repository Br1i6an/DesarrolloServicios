"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_semesterDAO_1 = __importDefault(require("../../daos/semesters/read_semesterDAO"));
const read_semester_sql_1 = require("../../repositories/semesters/read_semester_sql");
class Read_SemesterController extends read_semesterDAO_1.default {
    getSemesters(req, res) {
        Read_SemesterController.getSemesters(read_semester_sql_1.SQL_READ_SEMESTER.ALL, [], res);
    }
    find(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        Read_SemesterController.findById(read_semester_sql_1.SQL_READ_SEMESTER.LOAD, parameter, res);
    }
}
const read_SemesterController = new Read_SemesterController();
exports.default = read_SemesterController;
