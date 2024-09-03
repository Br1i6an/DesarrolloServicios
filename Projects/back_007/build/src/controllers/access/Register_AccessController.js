"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Access_sql_1 = require("../../repositories/access/Access_sql");
const Register_AccessDAO_1 = __importDefault(require("../../daos/access/Register_AccessDAO"));
class Register_AccessController extends Register_AccessDAO_1.default {
    getAccess(req, res) {
        Register_AccessController.getEntries(Access_sql_1.SQL_ACCESS.DATACCESS, [], res);
    }
}
const register_AccessController = new Register_AccessController();
exports.default = register_AccessController;
