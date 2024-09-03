export const SQL_CREATE_SEMESTER = {
    CREATE: 'INSERT INTO semesters (name_semester) VALUES ($1) RETURNING cod_semester'
}