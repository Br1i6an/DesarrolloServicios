"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_programDAO_1 = __importDefault(require("../../daos/programs/update_programDAO"));
const update_program_sql_1 = require("../../repositories/programs/update_program_sql");
class Update_ProgramController extends update_programDAO_1.default {
    update(req, res) {
        const code = req.body.codProgram;
        const name = req.body.nameProgram;
        const parameters = [name, code];
        Update_ProgramController.updateProgram(update_program_sql_1.SQL_UPDATE_PROGRAMS.UPDATE, parameters, res);
    }
}
const update_ProgramController = new Update_ProgramController();
exports.default = update_ProgramController;
