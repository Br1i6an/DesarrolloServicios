"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramDAO_1 = __importDefault(require("../daos/ProgramDAO"));
const Program_sql_1 = require("../repositories/Program_sql");
class ProgramController extends ProgramDAO_1.default {
    giveMePrograms(req, res) {
        ProgramController.getPrograms(Program_sql_1.SQL_PROGRAM.ALL, [], res);
    }
    savePrograms(req, res) {
        const name = req.body.programName;
        const parameter = [name];
        ProgramController.createPrograms(Program_sql_1.SQL_PROGRAM.CREATE, Program_sql_1.SQL_PROGRAM.CREATE, parameter, res);
    }
    searchOneMan(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        ProgramDAO_1.default.sortById(Program_sql_1.SQL_PROGRAM.SEARCH, parameter, res);
    }
    deleteOneMan(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        ProgramDAO_1.default.deleteById(Program_sql_1.SQL_PROGRAM.DELETE, parameter, res);
    }
}
const programController = new ProgramController();
exports.default = programController;
