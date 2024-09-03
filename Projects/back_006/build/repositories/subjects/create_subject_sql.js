"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_SUBJECT = void 0;
exports.SQL_CREATE_SUBJECT = {
    CREATE: 'INSERT INTO subjects (name_subject, reference_subject) VALUES ($1, $2) RETURNING cod_subject'
};
