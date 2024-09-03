"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_semesterDAO_1 = __importDefault(require("../../daos/semesters/update_semesterDAO"));
const update_semester_sql_1 = require("../../repositories/semesters/update_semester_sql");
class Update_SemesterController extends update_semesterDAO_1.default {
    update(req, res) {
        const code = req.body.codSemester;
        const name = req.body.nameSemester;
        const parameters = [name, code];
        Update_SemesterController.updateSemester(update_semester_sql_1.SQL_UPDATE_SEMESTER.UPDATE, parameters, res);
    }
}
const update_SemesterController = new Update_SemesterController();
exports.default = update_SemesterController;
