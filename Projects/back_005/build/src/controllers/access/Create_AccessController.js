"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_Access_DAO_1 = __importDefault(require("../../daos/access/Read_Access_DAO"));
const Read_Access_sql_1 = require("../../repositories/access/Read_Access_sql");
class Create_Access_Controller extends Read_Access_DAO_1.default {
    saveAcc(req, res) {
        const email = req.body.Email;
        const key = req.body.key;
        const parameter = [email, key];
        Create_Access_Controller.sortById(Read_Access_sql_1.READ_SQL_ACCESS.VALIDATE, parameter, res);
    }
    ;
}
const create_Access_Controller = new Create_Access_Controller();
exports.default = create_Access_Controller;
