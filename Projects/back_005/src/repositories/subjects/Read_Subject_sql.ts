export const READ_SQL_SUBJECT = {
    LIST: 'SELECT subject_id, subject_name \
    FROM subjects \
    ORDER BY subject_name',

    CONFIRM: 'SELECT COUNT (subject_id) AS amount \
    FROM subjects s \
    WHERE lower(s.subject_name) = LOWER($1)',

    SEARCH: 'SELECT subject_id, subject_name FROM subjects WHERE subject_id =$1'
}