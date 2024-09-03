export const READ_SQL_PENSUM = {

    LIST: 'SELECT pe.pensum_id, pen.pensum_name, pr.program_name FROM pensums pen INNER JOIN programs pr ON pen.program_id = pr.program_id;',

    CONFIRM: 'SELECT COUNT(pensum_id) as amount FROM pensums pen  WHERE lower(p.pensum_name) = lower($2)',

    SEARCH: 'SELECT pen.pensum_id, pen.program_id, p.pensum_name FROM pensums p WHERE pensum_id = $1',

}