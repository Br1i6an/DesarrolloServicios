import pgPromise from 'pg-promise';
import { camelizeColumns, IClient } from './connectionFunctions';

export const optionsPG: pgPromise.IInitOptions<IClient> = {
  receive(data, result, e) { camelizeColumns(data); }
};
