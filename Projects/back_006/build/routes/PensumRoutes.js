"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_PensumController_1 = __importDefault(require("../controllers/pensums/create_PensumController"));
const delete_PensumController_1 = __importDefault(require("../controllers/pensums/delete_PensumController"));
const read_PensumController_1 = __importDefault(require("../controllers/pensums/read_PensumController"));
const update_PensumController_1 = __importDefault(require("../controllers/pensums/update_PensumController"));
class PensumRoutes {
    constructor() {
        this.routePensumApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routePensumApi.get('/getpensums', read_PensumController_1.default.getPensums);
        this.routePensumApi.post('/setpensum', create_PensumController_1.default.create);
        this.routePensumApi.get('/getpensum/:code', read_PensumController_1.default.find);
        this.routePensumApi.delete('/getpensum/:code', delete_PensumController_1.default.delete);
        this.routePensumApi.put('/setpensum/update', update_PensumController_1.default.update);
    }
}
const pensumRoutes = new PensumRoutes();
exports.default = pensumRoutes.routePensumApi;
