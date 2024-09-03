"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AccessController_1 = __importDefault(require("../controllers/access/AccessController"));
class AccessRoutes {
    constructor() {
        this.RouteAccessApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.RouteAccessApi.post('/access/login', AccessController_1.default.saveAcc);
        //this.RouteAccessApi.get('/programs', readAccessController.listAcc);//This no
        //this.RouteProgramApi.get('/getprogram/:theCode', readProgramController.searchProg);//Search yes
        //this.RouteProgramApi.put('/programs/update', updateProgramController.updateProg)// Update yes 
        //this.RouteProgramApi.delete('/getprogram/:theCode', deleteProgramController.deleteProg);//Delete yes
    }
}
const accessRoutes = new AccessRoutes();
exports.default = accessRoutes.RouteAccessApi;
