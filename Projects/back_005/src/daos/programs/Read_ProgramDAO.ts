import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class Read_Program_DAO {

  public static async getPrograms(sqlConsult: string, parameters: any, res: Response): Promise<any> {
    pool.result(sqlConsult, parameters)
      .then((results) => {
        res.status(200).json(results.rows);
      })
      .catch((myError) => {
        console.log('Error!', myError);
        res.status(400).json({ msg: 'Error Listing Program' });
      });

  }

  protected static async sortById(sqlSearch: string, params: any, res: Response): Promise<any> {
    await pool.one(sqlSearch, params)
      .then((data) => {
        console.log(data);
        return res.status(200).json({ response: data })

      })
      .catch((myError) => {
        console.log(myError);
        return res.status(400).json({ msg: 'Error Searching Program' });
      });

  }
}
export default Read_Program_DAO;