import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class Create_Program_DAO {

  public static async createPrograms(sqlConfirm: string, sqlCreate: string, parameters: any, res: Response): Promise<any> {
    {
      await pool
        .task(async (consult) => {
          const data = await consult.one(sqlConfirm, parameters);
          if (data.amount == 0) {
            return await consult.one(sqlCreate, parameters);
          } else {
            return { program_id: 0 };
          }
        })
        .then((responses) => {
          if (responses.program_id != 0) {
            res.status(200).json({
              msg: 'Program Created Succesfully ',
              newCode: responses.program_id
            });
          } else {
            console.log(responses);
            res.status(402).json({
              msg: 'Error Creating Program, it maybe already exists '
            });
          }
        })
        .catch((miError) => {
          console.log("F", miError);
          res.status(400).json({ msg: "Error in the consult " });
        });
    }
  }

}
export default Create_Program_DAO;