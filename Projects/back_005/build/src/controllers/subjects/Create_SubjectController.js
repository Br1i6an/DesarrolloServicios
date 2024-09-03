"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_SubjecDAO_1 = __importDefault(require("../../daos/subjects/Create_SubjecDAO"));
const Create_Subject_sql_1 = require("../../repositories/subjects/Create_Subject_sql");
const Read_Subject_sql_1 = require("../../repositories/subjects/Read_Subject_sql");
class Create_Subject_Controller extends Create_SubjecDAO_1.default {
    saveSubj(req, res) {
        const name = req.body.subjectName;
        const parameter = [name];
        Create_Subject_Controller.createSubjects(Read_Subject_sql_1.READ_SQL_SUBJECT.CONFIRM, Create_Subject_sql_1.CREATE_SQL_SUBJECT.CREATE, parameter, res);
    }
}
const create_Subject_Controller = new Create_Subject_Controller();
exports.default = create_Subject_Controller;
