export const SQL_READ_SUBJECT = {
    ALL: 'SELECT s.cod_subject, s.name_subject, s.reference_subject \
    FROM subjects s',

    VERIFY: 'SELECT COUNT(s.cod_subject) AS quantity \
    FROM subjects s \
    WHERE lower(s.name_subject) = lower($1)',

    LOAD: 'SELECT s.cod_subject, s.name_subject, s.reference_subject \
    FROM subjects s \
    WHERE s.cod_subject = $1'
}