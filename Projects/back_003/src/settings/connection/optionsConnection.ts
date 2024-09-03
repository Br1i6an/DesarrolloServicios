import pgPromise from 'pg-promise';
import { camelizeColumns, IClient } from './functionsConnection';

export const optionsPG: pgPromise.IInitOptions<IClient> = {
  receive(data, result, e) { camelizeColumns(data); }
};
