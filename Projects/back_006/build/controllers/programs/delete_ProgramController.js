"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_programDAO_1 = __importDefault(require("../../daos/programs/delete_programDAO"));
const delete_program_sql_1 = require("../../repositories/programs/delete_program_sql");
class Delete_ProgramController extends delete_programDAO_1.default {
    delete(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        Delete_ProgramController.deleteById(delete_program_sql_1.SQL_DELETE_PROGRAM.DELETE, parameter, res);
    }
}
const delete_ProgramController = new Delete_ProgramController();
exports.default = delete_ProgramController;
