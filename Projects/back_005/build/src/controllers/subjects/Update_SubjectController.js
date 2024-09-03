"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_SubjectDAO_1 = __importDefault(require("../../daos/subjects/Update_SubjectDAO"));
const Update_Subject_sql_1 = require("../../repositories/subjects/Update_Subject_sql");
class Update_SubjectController extends Update_SubjectDAO_1.default {
    updateSubj(req, res) {
        const id = req.body.programId;
        const name = req.body.programName;
        const parameter = [name, id];
        Update_SubjectDAO_1.default.updateSubjects(Update_Subject_sql_1.UPDATE_SQL_SUBJECT.UPDATE, parameter, res);
    }
}
const update_SubjectController = new Update_SubjectController();
exports.default = update_SubjectController;
