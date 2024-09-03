"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_PROGRAM = void 0;
exports.SQL_CREATE_PROGRAM = {
    CREATE: 'INSERT INTO programs (name_program) VALUES ($1) RETURNING cod_program'
};
