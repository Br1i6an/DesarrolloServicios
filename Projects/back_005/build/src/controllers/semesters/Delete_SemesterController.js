"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_SemesterDAO_1 = __importDefault(require("../../daos/semesters/Delete_SemesterDAO"));
const Delete_Semester_sql_1 = require("../../repositories/semesters/Delete_Semester_sql");
class Delete_Semester_Controller extends Delete_SemesterDAO_1.default {
    deleteSem(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        Delete_Semester_Controller.deleteById(Delete_Semester_sql_1.DELETE_SQL_SEMESTER.DELETE, parameter, res);
    }
}
const delete_Semester_Controller = new Delete_Semester_Controller();
exports.default = delete_Semester_Controller;
