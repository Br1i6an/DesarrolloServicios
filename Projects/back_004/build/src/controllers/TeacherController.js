"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeacherDAO_1 = __importDefault(require("../daos/TeacherDAO"));
const teacher_sql_1 = require("../repositories/teacher_sql");
class TeacherController extends TeacherDAO_1.default {
    giveMeTeachers(req, res) {
        TeacherController.getTeacher(teacher_sql_1.SQL_TEACHER.ALL, [], res);
    }
}
const teacherController = new TeacherController();
exports.default = teacherController;
