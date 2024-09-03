"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_semesterDAO_1 = __importDefault(require("../../daos/semesters/create_semesterDAO"));
const create_semester_sql_1 = require("../../repositories/semesters/create_semester_sql");
const read_semester_sql_1 = require("../../repositories/semesters/read_semester_sql");
class Create_SemesterController extends create_semesterDAO_1.default {
    create(req, res) {
        const name = req.body.nameSemester;
        const parameter = [name];
        Create_SemesterController.createSemester(read_semester_sql_1.SQL_READ_SEMESTER.VERIFY, create_semester_sql_1.SQL_CREATE_SEMESTER.CREATE, parameter, res);
    }
}
const create_SemesterController = new Create_SemesterController();
exports.default = create_SemesterController;
