export const CREATE_SQL_SEMESTER = {
    CREATE: 'INSERT INTO semesters(semester_name) VALUES ($1) RETURNING semester_id',

}