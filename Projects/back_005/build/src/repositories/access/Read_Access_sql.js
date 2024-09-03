"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.READ_SQL_ACCESS = void 0;
exports.READ_SQL_ACCESS = {
    VALIDATE: 'SELECT ac.access_id FROM access ac WHERE ac.access_Email=$1 AND ac.access_key = $2'
};
