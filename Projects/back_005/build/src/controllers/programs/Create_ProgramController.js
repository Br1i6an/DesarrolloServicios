"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_ProgramDAO_1 = __importDefault(require("../../daos/programs/Create_ProgramDAO"));
const Create_Program_sql_1 = require("../../repositories/programs/Create_Program_sql");
const Read_Program_sql_1 = require("../../repositories/programs/Read_Program_sql");
class Create_Access_Controller extends Create_ProgramDAO_1.default {
    saveProg(req, res) {
        const name = req.body.programName;
        const parameter = [name];
        Create_Access_Controller.createPrograms(Read_Program_sql_1.READ_SQL_PROGRAM.CONFIRM, Create_Program_sql_1.CREATE_SQL_PROGRAM.CREATE, parameter, res);
    }
    ;
}
const create_Access_Controller = new Create_Access_Controller();
exports.default = create_Access_Controller;
