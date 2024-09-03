export const CREATE_SQL_PROGRAM = {
    CREATE: 'INSERT INTO programs(program_name) VALUES ($1) RETURNING program_id',

}