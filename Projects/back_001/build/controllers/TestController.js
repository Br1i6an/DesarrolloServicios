"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TestDAO_1 = __importDefault(require("../daos/TestDAO"));
class TestController extends TestDAO_1.default {
    attackme(req, res) {
        TestController.getInfo(req, res);
    }
}
const testController = new TestController();
exports.default = testController;
