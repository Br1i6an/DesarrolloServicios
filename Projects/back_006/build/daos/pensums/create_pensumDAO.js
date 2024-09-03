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
class Create_PensumDAO {
    static createPensum(sqlVerify, sqlCreate, parameter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default
                .task((query) => __awaiter(this, void 0, void 0, function* () {
                const data = yield query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return yield query.one(sqlCreate, parameter);
                }
                else {
                    return { codPensum: 0 };
                }
            }))
                .then((result) => {
                if (result.codPensum != 0) {
                    res.status(200).json({ response: 'Pensum successfully created.', newCod: result.codPensum });
                }
                else {
                    res.status(402).json({ response: 'Pensum unsuccessfully created. Already exists.' });
                }
            })
                .catch((err) => {
                console.log('Error at createPensum: ', err);
                res.status(400).json({ response: 'Did not work at create pensum method!' });
            });
        });
    }
}
exports.default = Create_PensumDAO;
