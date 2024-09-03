"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_ProgramDAO_1 = __importDefault(require("../../daos/programs/Delete_ProgramDAO"));
const Delete_Program_sql_1 = require("../../repositories/programs/Delete_Program_sql");
class Delete_Program_Controller extends Delete_ProgramDAO_1.default {
    deleteProg(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        Delete_Program_Controller.deleteById(Delete_Program_sql_1.DELETE_SQL_PROGRAM.DELETE, parameter, res);
    }
}
const delete_Program_Controller = new Delete_Program_Controller();
exports.default = delete_Program_Controller;
