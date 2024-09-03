"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_subjectDAO_1 = __importDefault(require("../../daos/subjects/read_subjectDAO"));
const read_subject_sql_1 = require("../../repositories/subjects/read_subject_sql");
class Read_SubjectController extends read_subjectDAO_1.default {
    getSubjects(req, res) {
        Read_SubjectController.getSubjects(read_subject_sql_1.SQL_READ_SUBJECT.ALL, [], res);
    }
    find(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        Read_SubjectController.findById(read_subject_sql_1.SQL_READ_SUBJECT.LOAD, parameter, res);
    }
}
const read_SubjectController = new Read_SubjectController();
exports.default = read_SubjectController;
