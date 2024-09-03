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
const connectionDb_1 = __importDefault(require("../settings/connections/connectionDb"));
class ProgramDAO {
    static getPrograms(sqlConsult, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            connectionDb_1.default.result(sqlConsult, parameters)
                .then((results) => {
                res.status(200).json(results.rows);
            })
                .catch((myError) => {
                console.log('Error!', myError);
                res.status(400).json({ respuesta: 'Does not work' });
            });
        });
    }
    static createPrograms(sqlConfirm, sqlCreate, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDb_1.default
                .task((consult) => __awaiter(this, void 0, void 0, function* () {
                const data = yield consult.one(sqlConfirm, parameters);
                if (data.cantidad == 0) {
                    return yield consult.one(sqlCreate, parameters);
                }
                else {
                    return { program_id: 0 };
                }
            }))
                .then((responses) => {
                if (responses.id_partido != 0) {
                    res.status(200).json({
                        responses: 'Program Created Succesfully ',
                        nuevoCodigo: responses.program_id
                    });
                }
                else {
                    res.status(402).json({
                        responses: 'Error creating Program, \
                it might be repeated '
                    });
                }
            })
                .catch((miError) => {
                console.log("F", miError);
                res.status(400).json({ responses: "Error in the consult " });
            });
        });
    }
    static sortById(sqlSearch, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDb_1.default.one(sqlSearch, params)
                .then((datas) => {
                console.log(datas);
                return res.status(200).json({ response: datas });
            })
                .catch((myError) => {
                console.log(myError);
                return res.status(400).json({ msg: 'Error searching Program' });
            });
        });
    }
    static deleteById(sqlSearch, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDb_1.default.result(sqlSearch, params)
                .then((datas) => {
                console.log(datas);
                return res.status(200).json({ response: datas.rowCount });
            })
                .catch((myError) => {
                console.log(myError);
                return res.status(400).json({ msg: 'Error deleting Program' });
            });
        });
    }
}
exports.default = ProgramDAO;
