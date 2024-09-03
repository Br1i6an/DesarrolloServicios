"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROGRAM = void 0;
exports.SQL_PROGRAM = {
    ALL: 'SELECT program_id, program_name \
    FROM programs \
    ORDER BY program_name',
    CREATE: 'INSERT INTO programs(program_name) VALUES ($1) RETURNING program_id',
    CONFIRM: 'SELECT COUNT (program_id) AS cantidad \
    FROM programs p \
    WHERE lower(p.program_name) = LOWER($1)',
    SEARCH: 'SELECT program_id, program_name FROM programs WHERE program_id =$1',
    DELETE: 'DELETE FROM programs WHERE program_id =$1'
};
