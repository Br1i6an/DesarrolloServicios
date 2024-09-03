"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_pensumDAO_1 = __importDefault(require("../../daos/pensums/create_pensumDAO"));
const create_pensum_sql_1 = require("../../repositories/pensums/create_pensum_sql");
const read_pensum_sql_1 = require("../../repositories/pensums/read_pensum_sql");
class Create_PensumController extends create_pensumDAO_1.default {
    create(req, res) {
        const name = req.body.namePensum;
        const program = req.body.codProgram;
        const parameter = [program, name];
        Create_PensumController.createPensum(read_pensum_sql_1.SQL_READ_PENSUM.VERIFY, create_pensum_sql_1.SQL_CREATE_PENSUM.CREATE, parameter, res);
    }
}
const create_PensumController = new Create_PensumController();
exports.default = create_PensumController;
