"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_AccessController_1 = __importDefault(require("../controllers/access/verify_AccessController"));
class VerifyRoutes {
    constructor() {
        this.routeAccessApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeAccessApi.post('/access', verify_AccessController_1.default.verify);
    }
}
const verifyRoutes = new VerifyRoutes();
exports.default = verifyRoutes.routeAccessApi;
