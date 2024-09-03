"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_SQL_SEMESTER = void 0;
exports.CREATE_SQL_SEMESTER = {
    CREATE: 'INSERT INTO semesters(semester_name) VALUES ($1) RETURNING semester_id',
};
