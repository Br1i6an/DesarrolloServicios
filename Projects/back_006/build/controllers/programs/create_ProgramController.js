"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_program_sql_1 = require("../../repositories/programs/create_program_sql");
const read_program_sql_1 = require("../../repositories/programs/read_program_sql");
const create_programDAO_1 = __importDefault(require("../../daos/programs/create_programDAO"));
class Create_ProgramController extends create_programDAO_1.default {
    create(req, res) {
        const name = req.body.nameProgram;
        const parameter = [name];
        Create_ProgramController.createProgram(read_program_sql_1.SQL_READ_PROGRAM.VERIFY, create_program_sql_1.SQL_CREATE_PROGRAM.CREATE, parameter, res);
    }
}
const create_ProgramController = new Create_ProgramController();
exports.default = create_ProgramController;
