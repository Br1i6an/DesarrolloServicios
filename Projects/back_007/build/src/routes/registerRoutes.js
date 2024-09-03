"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Register_AccessController_1 = __importDefault(require("../controllers/access/Register_AccessController"));
class RegisterRoutes {
    constructor() {
        this.RegisterRouteAccessApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RegisterRouteAccessApi.get('/access/register', Register_AccessController_1.default.getAccess);
    }
}
const registerRoutes = new RegisterRoutes();
exports.default = registerRoutes.RegisterRouteAccessApi;
