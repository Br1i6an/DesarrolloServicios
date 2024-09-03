import { Response } from "express";
import pool from "../../settings/connections/connectionDb";

class Update_Pensum_DAO {
    public static async updatePensum(sqlUpdateNow: string, parameters: any, res: Response): Promise<any> {
        {
            await pool.task(async consulta => {
                return await consulta.result(sqlUpdateNow, parameters);


            })
                .then((responses) => {
                    console.log(responses);
                    res.status(200).json({ msg: 'Pensum Updated' });


                })
                .catch((miError) => {
                    console.log(miError);
                    res.status(400).json({ msg: 'Error Updating Pensum' });

                });
        }
    }
}
export default Update_Pensum_DAO;