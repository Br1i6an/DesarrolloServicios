"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_PENSUM = void 0;
exports.SQL_UPDATE_PENSUM = {
    UPDATE: 'UPDATE pensums SET cod_program = $1, name_pensum = $2 \
    WHERE cod_pensum = $3',
};
