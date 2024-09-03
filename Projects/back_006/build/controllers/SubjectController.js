"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubjectDAO_1 = __importDefault(require("../daos/SubjectDAO"));
const subject_sql_1 = require("../repositories/subject_sql");
class SubjectController extends SubjectDAO_1.default {
    getSubjects(req, res) {
        SubjectController.getSubjects(subject_sql_1.SQL_SUBJECT.ALL, [], res);
    }
    create(req, res) {
        const name = req.body.nameSubject;
        const reference = req.body.referenceSubject;
        const parameter = [name, reference];
        SubjectController.createSubject(subject_sql_1.SQL_SUBJECT.VERIFY, subject_sql_1.SQL_SUBJECT.CREATE, parameter, res);
    }
    find(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        SubjectController.findById(subject_sql_1.SQL_SUBJECT.LOAD, parameter, res);
    }
    delete(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        SubjectController.deleteById(subject_sql_1.SQL_SUBJECT.DELETE, parameter, res);
    }
}
const subjectController = new SubjectController();
exports.default = subjectController;
