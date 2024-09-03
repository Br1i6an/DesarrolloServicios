"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_pensumDAO_1 = __importDefault(require("../../daos/pensums/read_pensumDAO"));
const read_pensum_sql_1 = require("../../repositories/pensums/read_pensum_sql");
class Read_PensumController extends read_pensumDAO_1.default {
    getPensums(req, res) {
        Read_PensumController.getPensums(read_pensum_sql_1.SQL_READ_PENSUM.ALL, [], res);
    }
    find(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        Read_PensumController.findById(read_pensum_sql_1.SQL_READ_PENSUM.LOAD, parameter, res);
    }
}
const read_PensumController = new Read_PensumController();
exports.default = read_PensumController;
