import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class Create_Access_DAO {

  public static async createAccess(sqlConfirm: string, parameters: any, res: Response): Promise<any> {
    {
      await pool
        .task(async (consult) => {
          const data = await consult.one(sqlConfirm, parameters);
          if (data.amount == 0) {
            return await consult.one( parameters);
          } else {
            return { access_id: 0 };
          }
        })
        .then((responses) => {
          if (responses.access_id != 0) {
            res.status(200).json({
              msg: 'Access Created Succesfully ',
              newCode: responses.access_id
            });
          } else {
            console.log(responses);
            res.status(402).json({
              msg: 'Error Creating Access, it maybe already exists '
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
export default Create_Access_DAO;