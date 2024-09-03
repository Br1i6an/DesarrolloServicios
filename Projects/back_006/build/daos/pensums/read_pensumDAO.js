"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDB_1 = __importDefault(require("../../settings/connection/connectionDB"));
class Read_PensumDAO {
    static findById(sqlQuery, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default.one(sqlQuery, params)
                .then((result) => {
                console.log(result);
                return res.status(200).json({ response: result });
            })
                .catch((err) => {
                console.log('Error at findById method.', err);
                res.status(400).json({ response: 'Error at find by id.' });
            });
        });
    }
    static getPensums(sqlQuery, parameter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            connectionDB_1.default.result(sqlQuery, parameter)
                .then((result) => {
                res.status(200).json(result.rows);
            })
                .catch((err) => {
                console.log('Error at getPensums: ', err);
                res.status(400).json({ response: 'Did not work at getPensums!' });
            });
        });
    }
}
exports.default = Read_PensumDAO;
