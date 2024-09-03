"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verify_accessDAO_1 = __importDefault(require("../../daos/access/verify_accessDAO"));
const Access_sql_1 = require("../../repositories/access/Access_sql");
class Access_Controller extends verify_accessDAO_1.default {
    saveAcc(req, res) {
        const email = req.body.email;
        const pass = req.body.pass;
        const parameter = [email, pass];
        Access_Controller.verifyAccess(Access_sql_1.SQL_ACCESS.VERIFY, parameter, res);
    }
    ;
}
const access_Controller = new Access_Controller();
exports.default = access_Controller;
