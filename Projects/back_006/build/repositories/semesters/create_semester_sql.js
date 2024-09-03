"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_SEMESTER = void 0;
exports.SQL_CREATE_SEMESTER = {
    CREATE: 'INSERT INTO semesters (name_semester) VALUES ($1) RETURNING cod_semester'
};
