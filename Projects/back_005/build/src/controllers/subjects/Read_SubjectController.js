"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_SubjectDAO_1 = __importDefault(require("../../daos/subjects/Read_SubjectDAO"));
const Read_Subject_sql_1 = require("../../repositories/subjects/Read_Subject_sql");
class Read_Subject_Controller extends Read_SubjectDAO_1.default {
    listSubj(req, res) {
        Read_Subject_Controller.getSubjects(Read_Subject_sql_1.READ_SQL_SUBJECT.LIST, [], res);
    }
    searchSubj(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        Read_SubjectDAO_1.default.sortById(Read_Subject_sql_1.READ_SQL_SUBJECT.SEARCH, parameter, res);
    }
}
const read_Subject_Controller = new Read_Subject_Controller;
exports.default = read_Subject_Controller;
