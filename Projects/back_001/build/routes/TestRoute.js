"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TestController_1 = __importDefault(require("../controllers/TestController"));
class TestRoute {
    constructor() {
        this.routeTestAPI = (0, express_1.Router)();
    }
    settings() {
        this.routeTestAPI.get('/giveme', TestController_1.default.attackme);
    }
}
const testRoute = new TestRoute();
exports.default = testRoute.routeTestAPI;
