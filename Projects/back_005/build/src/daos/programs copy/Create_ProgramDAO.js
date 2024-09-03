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
const connectionDb_1 = __importDefault(require("../../settings/connections/connectionDb"));
class Create_Program_DAO {
    static createPrograms(sqlConfirm, sqlCreate, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                yield connectionDb_1.default
                    .task((consult) => __awaiter(this, void 0, void 0, function* () {
                    const data = yield consult.one(sqlConfirm, parameters);
                    if (data.amount == 0) {
                        return yield consult.one(sqlCreate, parameters);
                    }
                    else {
                        return { program_id: 0 };
                    }
                }))
                    .then((responses) => {
                    if (responses.program_id != 0) {
                        res.status(200).json({
                            msg: 'Program Created Succesfully ',
                            newCode: responses.program_id
                        });
                    }
                    else {
                        console.log(responses);
                        res.status(402).json({
                            msg: 'Error Creating Program, it maybe already exists '
                        });
                    }
                })
                    .catch((miError) => {
                    console.log("F", miError);
                    res.status(400).json({ msg: "Error in the consult " });
                });
            }
        });
    }
}
exports.default = Create_Program_DAO;
