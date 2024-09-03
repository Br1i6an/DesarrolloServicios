export const SQL_CREATE_PENSUM = {
    CREATE: 'INSERT INTO pensums (cod_program, name_pensum) VALUES ($1, $2) RETURNING cod_pensum'
}