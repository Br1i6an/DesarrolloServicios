export const SQL_UPDATE_SUBJECT = {
    UPDATE: 'UPDATE subjects SET name_subject = $1, reference_subject = $2 \
    WHERE cod_subject = $3',

    VERIFY: 'SELECT COUNT(s.cod_subject) AS quantity \
    FROM subjetcs s \
    WHERE lower(s.name_subject) = lower($1)',
}