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
class Update_PensumDAO {
    static updatePensum(sqlUpdate, parameter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default
                .task((query) => __awaiter(this, void 0, void 0, function* () {
                return yield query.result(sqlUpdate, parameter);
            }))
                .then((result) => {
                console.log(result);
                res.status(402).json({ response: 'Pensum successfully updated.' });
            })
                .catch((err) => {
                console.log('Error at updatePensum: ', err);
                res.status(400).json({ response: 'Did not work at update pensum method!' });
            });
        });
    }
}
exports.default = Update_PensumDAO;
