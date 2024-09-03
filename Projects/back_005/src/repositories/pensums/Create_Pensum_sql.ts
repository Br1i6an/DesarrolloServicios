export const CREATE_SQL_PENSUM = {

    CREATE: 'INSERT INTO pensums(program_id,pensum_name) VALUES($1,$2) RETURNING pensum_id',

}