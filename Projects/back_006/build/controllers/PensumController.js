"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_1 = __importDefault(require("../daos/PensumDAO"));
const pensum_sql_1 = require("../repositories/pensum_sql");
class PensumController extends PensumDAO_1.default {
    getPensums(req, res) {
        PensumController.getPensums(pensum_sql_1.SQL_PENSUM.ALL, [], res);
    }
    create(req, res) {
        const name = req.body.namePensum;
        const program = req.body.codProgram;
        const parameter = [program, name];
        PensumController.createPensum(pensum_sql_1.SQL_PENSUM.VERIFY, pensum_sql_1.SQL_PENSUM.CREATE, parameter, res);
    }
    find(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        PensumController.findById(pensum_sql_1.SQL_PENSUM.LOAD, parameter, res);
    }
    delete(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        PensumController.deleteById(pensum_sql_1.SQL_PENSUM.DELETE, parameter, res);
    }
}
const pensumController = new PensumController();
exports.default = pensumController;
