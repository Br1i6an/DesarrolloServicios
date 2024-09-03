export const SQL_ACCESS = {
    VERIFY: 'SELECT u.user_name, u.user_lastname, r.role_name \
            FROM users u \
            INNER JOIN roles r ON r.role_id = u.role_id \
            INNER JOIN access a ON a.user_id = u.user_id \
            WHERE a.access_email = $1 AND a.access_password = $2',


    DATACCESS: 'select count(e.user_id), u.user_name \
    from entries e \
    inner join access a on e.user_id = a.user_id \
    inner join users u on a.user_id= u.user_id \
    group by u.user_name'
}

