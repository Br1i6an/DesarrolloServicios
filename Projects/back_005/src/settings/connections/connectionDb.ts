import pgPromise from 'pg-promise';
import { optionsPG } from './optionsConnection';
import vrConnection from '../domain/var_database'

//PostgresPull
const pgp = pgPromise(optionsPG);
const pool = pgp(vrConnection);

pool.connect()
    .then((conn) => {
        console.log('Successfully connection to: ', vrConnection.database);
        conn.done();
    })
    .catch((err) => {
        console.log(err);
    });

export default pool





