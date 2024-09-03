"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramDAO_1 = __importDefault(require("../daos/ProgramDAO"));
const program_sql_1 = require("../repositories/program_sql");
class ProgramController extends ProgramDAO_1.default {
    getPrograms(req, res) {
        ProgramController.getPrograms(program_sql_1.SQL_PROGRAM.ALL, [], res);
    }
    create(req, res) {
        const name = req.body.nameProgram;
        const parameter = [name];
        ProgramController.createProgram(program_sql_1.SQL_PROGRAM.VERIFY, program_sql_1.SQL_PROGRAM.CREATE, parameter, res);
    }
    find(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        ProgramController.findById(program_sql_1.SQL_PROGRAM.LOAD, parameter, res);
    }
    delete(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        ProgramController.deleteById(program_sql_1.SQL_PROGRAM.DELETE, parameter, res);
    }
}
const programController = new ProgramController();
exports.default = programController;
