"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubjectDAO_1 = __importDefault(require("../daos/SubjectDAO"));
const Subject_sql_1 = require("../repositories/Subject_sql");
class SubjectController extends SubjectDAO_1.default {
    giveMeSubjects(req, res) {
        SubjectController.getSubjects(Subject_sql_1.SQL_SUBJECT.ALL, [], res);
    }
    saveSubjects(req, res) {
        const name = req.body.programName;
        const parameter = [name];
        SubjectController.createSubjects(Subject_sql_1.SQL_SUBJECT.CREATE, Subject_sql_1.SQL_SUBJECT.CREATE, parameter, res);
    }
    searchOneMan(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        SubjectDAO_1.default.sortById(Subject_sql_1.SQL_SUBJECT.SEARCH, parameter, res);
    }
    deleteOneMan(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        SubjectDAO_1.default.deleteById(Subject_sql_1.SQL_SUBJECT.DELETE, parameter, res);
    }
}
const subjectController = new SubjectController();
exports.default = subjectController;
