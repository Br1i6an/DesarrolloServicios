"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_subjectDAO_1 = __importDefault(require("../../../daos/subjects/delete_subjectDAO"));
const delete_subject_sql_1 = require("../../../repositories/subjects/delete_subject_sql");
class Delete_SubjectController extends delete_subjectDAO_1.default {
    delete(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        Delete_SubjectController.deleteById(delete_subject_sql_1.SQL_DELETE_SUBJECT.DELETE, parameter, res);
    }
}
const delete_SubjectController = new Delete_SubjectController();
exports.default = delete_SubjectController;
