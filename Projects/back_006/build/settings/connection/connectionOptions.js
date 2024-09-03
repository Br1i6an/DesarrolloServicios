"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsPG = void 0;
const connectionFunctions_1 = require("./connectionFunctions");
exports.optionsPG = {
    receive(data, result, e) { (0, connectionFunctions_1.camelizeColumns)(data); }
};
