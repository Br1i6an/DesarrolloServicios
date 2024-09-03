import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class Create_Semester_DAO {

  public static async createSemesters(sqlConfirm: string, sqlCreate: string, parameters: any, res: Response): Promise<any> {
    {
      await pool
        .task(async (consult) => {
          const data = await consult.one(sqlConfirm, parameters);
          if (data.amount == 0) {
            return await consult.one(sqlCreate, parameters);
          } else {
            return { semester_id: 0 };
          }
        })
        .then((responses) => {
          if (responses.semester_id != 0) {
            res.status(200).json({
              msg: 'Semester Created Succesfully ',
              newCode: responses.program_id
            });
          } else {
            console.log(responses);
            res.status(402).json({
              msg: 'Error Creating Semester, it maybe already exists '
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
export default Create_Semester_DAO;