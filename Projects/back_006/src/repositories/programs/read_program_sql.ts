export const SQL_READ_PROGRAM = {
    ALL: 'SELECT p.cod_program, p.name_program \
    FROM programs p \
    ORDER BY p.name_program',

    LOAD: 'SELECT p.cod_program, p.name_program \
    FROM programs p \
    WHERE cod_program = $1',

    VERIFY: 'SELECT COUNT(p.cod_program) AS quantity \
    FROM programs p \
    WHERE lower(p.name_program) = lower($1)',
}