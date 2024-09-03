export const SQL_READ_SEMESTER = {
    ALL: 'SELECT s.cod_semester, s.name_semester \
    FROM semesters s',

    LOAD: 'SELECT s.cod_semester, s.name_semester \
    FROM semesters s \
    WHERE s.cod_semester = $1',

    VERIFY: 'SELECT COUNT(s.cod_semester) AS quantity \
    FROM semesters s \
    WHERE lower(s.name_semester) = lower($1)',
}