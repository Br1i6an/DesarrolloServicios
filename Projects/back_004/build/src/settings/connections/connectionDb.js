"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const optionsConnection_1 = require("./optionsConnection");
const var_database_1 = __importDefault(require("../domain/var_database"));
//PostgresPull
const pgp = (0, pg_promise_1.default)(optionsConnection_1.optionsPG);
const pool = pgp(var_database_1.default);
pool.connect()
    .then((conn) => {
    console.log('Successfully connection to: ', var_database_1.default.database);
    conn.done();
})
    .catch((err) => {
    console.log(err);
});
exports.default = pool;
