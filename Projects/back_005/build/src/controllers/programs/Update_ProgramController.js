"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_ProgramDAO_1 = __importDefault(require("../../daos/programs/Update_ProgramDAO"));
const Update_Program_sql_1 = require("../../repositories/programs/Update_Program_sql");
class Update_ProgramController extends Update_ProgramDAO_1.default {
    updateProg(req, res) {
        const id = req.body.programId;
        const name = req.body.programName;
        const parameter = [name, id];
        Update_ProgramDAO_1.default.updatePrograms(Update_Program_sql_1.UPDATE_SQL_PROGRAM.UPDATE, parameter, res);
    }
}
const update_ProgramController = new Update_ProgramController();
exports.default = update_ProgramController;
