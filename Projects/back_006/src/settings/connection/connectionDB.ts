import pgPromise from 'pg-promise';
import { optionsPG } from './connectionOptions';
import varConnections from '../domains/var_database';

//PostgresPull
const pgp = pgPromise(optionsPG);
const pool = pgp(varConnections);

pool.connect()
    .then((conn) => {
        console.log('Successfully connection to: ', varConnections.database);
        conn.done();
    })
    .catch((err) => {
        console.log(err);
    });

export default pool;