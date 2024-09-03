export const SQL_VERIFY_ACCESS = {
    VERIFY: 'SELECT a.cod_access, r.name_role \ FROM acceso a \
    INNER JOIN roles r ON a.cod_role = r.cod_role \
    WHERE a.email_access = $1 AND a.passwrd_access = $2 '
}