"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_subjectDAO_1 = __importDefault(require("../../daos/subjects/create_subjectDAO"));
const create_subject_sql_1 = require("../../repositories/subjects/create_subject_sql");
const read_subject_sql_1 = require("../../repositories/subjects/read_subject_sql");
class Create_SubjectController extends create_subjectDAO_1.default {
    create(req, res) {
        const name = req.body.nameSubject;
        const reference = req.body.referenceSubject;
        const parameter = [name, reference];
        Create_SubjectController.createSubject(read_subject_sql_1.SQL_READ_SUBJECT.VERIFY, create_subject_sql_1.SQL_CREATE_SUBJECT.CREATE, parameter, res);
    }
}
const create_SubjectController = new Create_SubjectController();
exports.default = create_SubjectController;
