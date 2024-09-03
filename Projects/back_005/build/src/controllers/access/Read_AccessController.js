"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_Access_DAO_1 = __importDefault(require("../../daos/access/Read_Access_DAO"));
const Read_Access_sql_1 = require("../../repositories/access/Read_Access_sql");
class Read_Access_Controller extends Read_Access_DAO_1.default {
    listAcc(req, res) {
        Read_Access_Controller.getAccess(Read_Access_sql_1.READ_SQL_ACCESS.LIST, [], res);
    }
    searchProg(req, res) {
        const code = req.params.theCode;
        const parameter = [code];
        Read_Access_DAO_1.default.sortById(Read_Access_sql_1.READ_SQL_ACCESS.SEARCH, parameter, res);
    }
}
const read_Access_Controller = new Read_Access_Controller();
exports.default = read_Access_Controller;
