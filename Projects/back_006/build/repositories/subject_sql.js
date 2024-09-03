"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SUBJECT = void 0;
exports.SQL_SUBJECT = {
    ALL: 'SELECT s.name_subject, s.reference_subject \
    FROM subjects s',
    VERIFY: 'SELECT COUNT(s.cod_subject) AS quantity \
    FROM subjects s \
    WHERE lower(s.name_subject) = lower($1)',
    LOAD: 'SELECT s.cod_subject, s.name_subject, s.reference_subject \
    FROM subjects s \
    WHERE s.cod_subject = $1'
};
