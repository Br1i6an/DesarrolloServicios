"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_VERIFY_ACCESS = void 0;
exports.SQL_VERIFY_ACCESS = {
    VERIFY: 'SELECT a.cod_access, r.name_role \ FROM acceso a \
    INNER JOIN roles r ON a.cod_role = r.cod_role \
    WHERE a.email_access = $1 AND a.passwrd_access = $2 '
};
