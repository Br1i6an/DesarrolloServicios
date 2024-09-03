"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_SemesterDAO_1 = __importDefault(require("../../daos/semesters/Update_SemesterDAO"));
const Update_Semester_sql_1 = require("../../repositories/semesters/Update_Semester_sql");
class Update_SemesterController extends Update_SemesterDAO_1.default {
    updateSem(req, res) {
        const id = req.body.programId;
        const name = req.body.programName;
        const parameter = [name, id];
        Update_SemesterDAO_1.default.updateSemesters(Update_Semester_sql_1.UPDATE_SQL_SEMESTER.UPDATE, parameter, res);
    }
}
const update_SemesterController = new Update_SemesterController();
exports.default = update_SemesterController;
