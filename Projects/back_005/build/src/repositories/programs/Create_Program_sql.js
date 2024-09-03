"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_SQL_PROGRAM = void 0;
exports.CREATE_SQL_PROGRAM = {
    CREATE: 'INSERT INTO programs(program_name) VALUES ($1) RETURNING program_id',
};
