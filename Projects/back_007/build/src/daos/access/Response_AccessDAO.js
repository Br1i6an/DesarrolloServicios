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
const jsonWebToken_1 = __importDefault(require("jsonWebToken"));
class Response_AccessDAO {
    static process(result, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (result != null) {
                console.log(result);
                //Let's to create the token.
                const token = jsonWebToken_1.default.sign({ name: result.userName, lastName: result.userLastname, role: result.roleName }, 'EncryptedPassword', { expiresIn: '3h' });
                return res.status(200).json({ userName: result.userName, lastName: result.userLastname, role: result.roleName, token: token });
            }
            else {
                return res.status(401).json({ msg: 'Incorrect, not found.' });
            }
        });
    }
}
exports.default = Response_AccessDAO;
