"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_programDAO_1 = __importDefault(require("../../daos/programs/read_programDAO"));
const read_program_sql_1 = require("../../repositories/programs/read_program_sql");
class Read_ProgramController extends read_programDAO_1.default {
    getPrograms(req, res) {
        Read_ProgramController.getPrograms(read_program_sql_1.SQL_READ_PROGRAM.ALL, [], res);
    }
    find(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        Read_ProgramController.findById(read_program_sql_1.SQL_READ_PROGRAM.LOAD, parameter, res);
    }
}
const read_ProgramController = new Read_ProgramController();
exports.default = read_ProgramController;
