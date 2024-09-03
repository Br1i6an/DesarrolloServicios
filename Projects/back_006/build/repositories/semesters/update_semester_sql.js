"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_SEMESTER = void 0;
exports.SQL_UPDATE_SEMESTER = {
    UPDATE: 'UPDATE semesters SET name_semester = $1 \
    WHERE cod_semester = $2',
    VERIFY: 'SELECT COUNT(s.cod_semester) AS quantity \
    FROM semesters s \
    WHERE lower(s.name_semester) = lower($1)',
};
