import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class ProgramDAO {

  public static async getPrograms(sqlConsult: string, parameters: any, res: Response): Promise<any> {
    pool.result(sqlConsult, parameters)
      .then((results) => {
        res.status(200).json(results.rows);
      })
      .catch((myError) => {
        console.log('Error!', myError);
        res.status(400).json({ respuesta: 'Does not work' });
      });

  }
  public static async createPrograms(
    sqlConfirm: string,
    sqlCreate: string,
    parameters: any,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consult) => {
        const data = await consult.one(sqlConfirm, parameters);
        if (data.cantidad == 0) {
          return await consult.one(sqlCreate, parameters);
        } else {
          return { program_id: 0 };
        }
      })
      .then((responses) => {
        if (responses.id_partido != 0) {
          res.status(200).json({
            responses: 'Program Created Succesfully ',
            nuevoCodigo: responses.program_id
          });
        } else {
          res.status(402).json({
            responses: 'Error creating Program, \
                it might be repeated '});
        }
      })
      .catch((miError) => {
        console.log("F", miError);
        res.status(400).json({ responses: "Error in the consult " });
      });
  }

  protected static async sortById(sqlSearch: string, params: any, res: Response): Promise<any> {
    await pool.one(sqlSearch, params)
      .then((datas) => {
        console.log(datas);
        return res.status(200).json({ response: datas })

      })
      .catch((myError) => {
        console.log(myError);
        return res.status(400).json({ msg: 'Error searching Program' });
      });

  }


}
export default ProgramDAO;