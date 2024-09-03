export const SQL_CREATE_PROGRAM = {

    CREATE: 'INSERT INTO programs (name_program) VALUES ($1) RETURNING cod_program'
    
}