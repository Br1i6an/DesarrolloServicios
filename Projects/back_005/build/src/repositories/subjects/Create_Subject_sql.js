"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_SQL_SUBJECT = void 0;
exports.CREATE_SQL_SUBJECT = {
    CREATE: 'INSERT INTO subject(subject_name) VALUES ($1) RETURNING subject_id',
};
