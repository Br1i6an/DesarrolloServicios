"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_SubjectDAO_1 = __importDefault(require("../../daos/subjects/Delete_SubjectDAO"));
const Delete_Subject_sql_1 = require("../../repositories/subjects/Delete_Subject_sql");
class Delete_Subject_Controller extends Delete_SubjectDAO_1.default {
    deleteSubj(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        Delete_Subject_Controller.deleteById(Delete_Subject_sql_1.DELETE_SQL_SUBJECT.DELETE, parameter, res);
    }
}
const delete_Program_Controller = new Delete_Subject_Controller();
exports.default = delete_Program_Controller;
