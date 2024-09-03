"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verify_access_sql_1 = require("../../repositories/access/verify_access_sql");
const verify_accessDAO_1 = __importDefault(require("../../daos/access/verify_accessDAO"));
class Verify_AccessController extends verify_accessDAO_1.default {
    verify(req, res) {
        const email = req.body.email;
        const pass = req.body.pass;
        const parameter = [email, pass];
        Verify_AccessController.verifyAccess(verify_access_sql_1.SQL_VERIFY_ACCESS.VERIFY, parameter, res);
    }
}
const verify_AccessController = new Verify_AccessController();
exports.default = verify_AccessController;
