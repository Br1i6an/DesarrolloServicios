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
class Create_Pensum_DAO {
    static createPensums(sqlConfirm, sqlCreate, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                yield connectionDb_1.default
                    .task((consult) => __awaiter(this, void 0, void 0, function* () {
                    const data = yield consult.one(sqlConfirm, parameters);
                    if (data.amount == 0) {
                        return yield consult.one(sqlCreate, parameters);
                    }
                    else {
                        return { pensum_id: 0 };
                    }
                }))
                    .then((responses) => {
                    if (responses.pensum_id != 0) {
                        res.status(200).json({
                            msg: 'Pensum Created Succesfully ',
                            newCode: responses.pensum_id
                        });
                    }
                    else {
                        console.log(responses);
                        res.status(402).json({
                            msg: 'Error Creating Pensum, it maybe already exists '
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
exports.default = Create_Pensum_DAO;
