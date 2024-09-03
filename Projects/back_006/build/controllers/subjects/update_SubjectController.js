"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_subjectDAO_1 = __importDefault(require("../../daos/subjects/update_subjectDAO"));
const update_subject_sql_1 = require("../../repositories/subjects/update_subject_sql");
class Update_SubjectController extends update_subjectDAO_1.default {
    update(req, res) {
        const code = req.body.codSubject;
        const name = req.body.nameSubject;
        const reference = req.body.referenceSubject;
        const parameters = [name, reference, code];
        Update_SubjectController.updateSubject(update_subject_sql_1.SQL_UPDATE_SUBJECT.UPDATE, parameters, res);
    }
}
const update_SubjectController = new Update_SubjectController();
exports.default = update_SubjectController;
