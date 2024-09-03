export const CREATE_SQL_SUBJECT = {
    CREATE: 'INSERT INTO subject(subject_name) VALUES ($1) RETURNING subject_id',
}