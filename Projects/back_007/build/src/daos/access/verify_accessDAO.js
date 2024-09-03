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
const Response_AccessDAO_1 = __importDefault(require("./Response_AccessDAO"));
const connectionDb_1 = __importDefault(require("../../settings/connections/connectionDb"));
class Verify_accessDAO {
    static verifyAccess(sqlQuery, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDb_1.default.oneOrNone(sqlQuery, params)
                .then((result) => {
                return Response_AccessDAO_1.default.process(result, res);
            })
                .catch((err) => {
                console.log('Error verifying access method.', err);
                res.status(500).json({ response: 'Server Error' });
            });
        });
    }
}
exports.default = Verify_accessDAO;
