"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROGRAM = void 0;
exports.SQL_PROGRAM = {
    ALL: 'SELECT p.cod_program, p.name_program \
    FROM programs p \
    ORDER BY p.name_program',
    CREATE: 'INSERT INTO programs (name_program) VALUES ($1) RETURNING cod_program',
    VERIFY: 'SELECT COUNT(p.cod_program) AS quantity \
    FROM programs p \
    WHERE lower(p.name_program) = lower($1)',
    LOAD: 'SELECT p.cod_program, p.name_program \
    FROM programs p \
    WHERE cod_program = $1',
    DELETE: 'DELETE FROM programs \
    WHERE cod_program = $1'
};
