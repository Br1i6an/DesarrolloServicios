"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubjectPensumDAO_1 = __importDefault(require("../daos/SubjectPensumDAO"));
const subjectpensum_sql_1 = require("../repositories/subjectpensum_sql");
class SubjectPensumController extends SubjectPensumDAO_1.default {
    getSubjectPensum(req, res) {
        SubjectPensumController.getSubjectPensum(subjectpensum_sql_1.SQL_SUBJECTPENSUM.ALL, [], res);
    }
}
const subjectPensumController = new SubjectPensumController();
exports.default = subjectPensumController;
