"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_pensumDAO_1 = __importDefault(require("../../daos/pensums/update_pensumDAO"));
const update_pensum_sql_1 = require("../../repositories/pensums/update_pensum_sql");
class Update_PensumController extends update_pensumDAO_1.default {
    update(req, res) {
        const code = req.body.codPensum;
        const name = req.body.namePensum;
        const program = req.body.codProgram;
        const parameters = [program, name, code];
        Update_PensumController.updatePensum(update_pensum_sql_1.SQL_UPDATE_PENSUM.UPDATE, parameters, res);
    }
}
const update_PensumController = new Update_PensumController();
exports.default = update_PensumController;
