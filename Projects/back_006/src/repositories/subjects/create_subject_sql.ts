export const SQL_CREATE_SUBJECT = {
    CREATE: 'INSERT INTO subjects (name_subject, reference_subject) VALUES ($1, $2) RETURNING cod_subject'
}