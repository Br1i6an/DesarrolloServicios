"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SUBJECT = void 0;
exports.SQL_SUBJECT = {
    LIST: 'SELECT subject_id, subject_name \
    FROM subjects \
    ORDER BY subject_name',
    CREATE: 'INSERT INTO programs(subject_name) VALUES ($1) RETURNING subject_id',
    CONFIRM: 'SELECT COUNT (subject_id) AS cantidad \
    FROM subjects p \
    WHERE lower(s.subject_name) = LOWER($1)',
    SEARCH: 'SELECT subject_id, subject_name FROM subjects WHERE subject_id =$1',
    DELETE: 'DELETE FROM subjects WHERE subject_id =$1'
};
