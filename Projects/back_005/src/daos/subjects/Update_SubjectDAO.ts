import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class Update_Subject_DAO{

    public static async updateSubjects(
        sqlUpdateNow: string, parameters: any, res: Response): Promise<any> {
        await pool.task(async (consult: any) => {
            return await consult.result(sqlUpdateNow, parameters);
        })
            .then((responses: any) => {
                console.log(responses);
                res.status(200).json({ msg: "Subject Updated" })
            })
            .catch((miError: any) => {
                console.log(miError);
                res.status(400).json({ msg: "Error Updating Subject" });
            });
    }    
}

export default Update_Subject_DAO;