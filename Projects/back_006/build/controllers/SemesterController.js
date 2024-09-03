"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemesterDAO_1 = __importDefault(require("../daos/SemesterDAO"));
const semester_sql_1 = require("../repositories/semester_sql");
class SemesterController extends SemesterDAO_1.default {
    getSemesters(req, res) {
        SemesterController.getSemesters(semester_sql_1.SQL_SEMESTER.ALL, [], res);
    }
}
const semesterController = new SemesterController();
exports.default = semesterController;
