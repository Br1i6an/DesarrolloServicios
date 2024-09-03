"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_semesterDAO_1 = __importDefault(require("../../daos/semesters/delete_semesterDAO"));
const delete_semester_sql_1 = require("../../repositories/semesters/delete_semester_sql");
class Delete_SemesterController extends delete_semesterDAO_1.default {
    delete(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        Delete_SemesterController.deleteById(delete_semester_sql_1.SQL_DELETE_SEMESTER.DELETE, parameter, res);
    }
}
const delete_SemesterController = new Delete_SemesterController();
exports.default = delete_SemesterController;
