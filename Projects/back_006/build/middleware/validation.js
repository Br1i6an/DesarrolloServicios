"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Validation {
    delToken(req, res, next) {
        if (!req.headers.authorization) {
            res.status(401).json({ msg: 'Does not Work' });
        }
        else {
            try {
                const myToken = req.headers.authorization.split(' ')[1];
                const info = jsonwebtoken_1.default.verify(myToken, 'EncryptedPassword');
                req.body.utileData = info;
                next();
            }
            catch (error) {
                res.status(401).json({ msg: 'error in login' });
            }
        }
    }
}
const validation = new Validation();
exports.default = validation;
