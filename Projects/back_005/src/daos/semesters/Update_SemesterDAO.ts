import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class Update_Semester_DAO {

    public static async updateSemesters(
        sqlUpdateNow: string, parameters: any, res: Response): Promise<any> {
        await pool.task(async (consult: any) => {
            return await consult.result(sqlUpdateNow, parameters);
        })
            .then((responses: any) => {
                console.log(responses);
                res.status(200).json({ msg: "Semester Updated" })
            })
            .catch((miError: any) => {
                console.log(miError);
                res.status(400).json({ msg: "Error Updating Semester" });
            });
    }
}

export default Update_Semester_DAO;