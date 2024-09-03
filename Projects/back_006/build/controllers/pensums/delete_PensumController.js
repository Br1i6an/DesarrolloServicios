"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_pensumDAO_1 = __importDefault(require("../../daos/pensums/delete_pensumDAO"));
const delete_pensum_sql_1 = require("../../repositories/pensums/delete_pensum_sql");
class Delete_PensumController extends delete_pensumDAO_1.default {
    delete(req, res) {
        const cod = req.params.code;
        const parameter = [cod];
        Delete_PensumController.deleteById(delete_pensum_sql_1.SQL_DELETE_PENSUM.DELETE, parameter, res);
    }
}
const delete_pensumController = new Delete_PensumController();
exports.default = delete_pensumController;
