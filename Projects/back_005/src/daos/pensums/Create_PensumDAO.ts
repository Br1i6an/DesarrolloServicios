import { Request, Response } from "express";
import pool from "../../settings/connections/connectionDb";

class Create_Pensum_DAO {

    public static async createPensums(sqlConfirm: string, sqlCreate: string, parameters: any, res: Response): Promise<any> {
      {
        await pool
          .task(async (consult) => {
            const data = await consult.one(sqlConfirm, parameters);
            if (data.amount == 0) {
              return await consult.one(sqlCreate, parameters);
            } else {
              return { pensum_id: 0 };
            }
          })
          .then((responses) => {
            if (responses.pensum_id != 0) {
              res.status(200).json({
                msg: 'Pensum Created Succesfully ',
                newCode: responses.pensum_id
              });
            } else {
              console.log(responses);
              res.status(402).json({
                msg: 'Error Creating Pensum, it maybe already exists '
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
  export default Create_Pensum_DAO;