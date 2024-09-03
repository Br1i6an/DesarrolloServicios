export const READ_SQL_SEMESTER={
    LIST: 'SELECT semester_id, semester_name \
    FROM semesters \
    ORDER BY semester_id',

    CONFIRM: 'SELECT COUNT(se.semester_id) AS amount \
    FROM semesters p \
    WHERE lower(se.semester_name)=lower($1)',

    SEARCH: 'SELECT semester_id, semester_name FROM semesters WHERE semester_id = $1'
}