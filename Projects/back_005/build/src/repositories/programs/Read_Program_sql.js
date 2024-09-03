"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.READ_SQL_PROGRAM = void 0;
exports.READ_SQL_PROGRAM = {
    LIST: 'SELECT program_id, program_name \
    FROM programs \
    ORDER BY program_id',
    CONFIRM: 'SELECT COUNT(p.program_id) AS amount \
    FROM programs p \
    WHERE lower(p.program_name)=lower($1)',
    SEARCH: 'SELECT program_id, program_name FROM programs WHERE program_id = $1'
};
