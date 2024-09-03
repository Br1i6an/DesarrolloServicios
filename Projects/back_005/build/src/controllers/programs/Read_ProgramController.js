"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_ProgramDAO_1 = __importDefault(require("../../daos/programs/Read_ProgramDAO"));
const Read_Program_sql_1 = require("../../repositories/programs/Read_Program_sql");
class Read_Program_Controller extends Read_ProgramDAO_1.default {
    listProg(req, res) {
        Read_Program_Controller.getPrograms(Read_Program_sql_1.READ_SQL_PROGRAM.LIST, [], res);
    }
    searchProg(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        Read_ProgramDAO_1.default.sortById(Read_Program_sql_1.READ_SQL_PROGRAM.SEARCH, parameter, res);
    }
}
const read_Program_Controller = new Read_Program_Controller();
exports.default = read_Program_Controller;
