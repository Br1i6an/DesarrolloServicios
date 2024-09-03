"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsPG = void 0;
const functionsConnection_1 = require("./functionsConnection");
exports.optionsPG = {
    receive(data, result, e) { (0, functionsConnection_1.camelizeColumns)(data); }
};
