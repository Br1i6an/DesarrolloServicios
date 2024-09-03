"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_programDAO_1 = __importDefault(require("../../daos/programs/update_programDAO"));
const update_program_sql_1 = require("../../repositories/programs/update_program_sql");
class ProgramController_Update extends update_programDAO_1.default {
    update(req, res) {
        const code = req.body.codProgram;
        const name = req.body.nameProgram;
        const parameters = [name, code];
        ProgramController_Update.updateProgram(update_program_sql_1.SQL_UPDATE_PROGRAMS.UPDATE, parameters, res);
    }
}
const programController_Update = new ProgramController_Update();
exports.default = programController_Update;
