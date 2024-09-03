"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_READ_PENSUM = void 0;
exports.SQL_READ_PENSUM = {
    ALL: 'select p.cod_pensum, p.cod_program, pg.name_program, p.name_pensum \
    from pensums p, programs pg \
    WHERE p.cod_program = pg.cod_program \ ',
    VERIFY: 'SELECT COUNT(p.cod_pensum) AS quantity \
    FROM pensums p \
    WHERE lower(p.name_pensum) = lower($2)',
    LOAD: 'SELECT p.cod_pensum, p.cod_program, pg.name_program, p.name_pensum \
    FROM pensums p, programs pg \
    WHERE cod_pensum = $1 and p.cod_program = pg.cod_program',
};
