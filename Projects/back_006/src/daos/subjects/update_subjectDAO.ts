import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Update_SubjectDAO {
    public static async updateSubject(sqlUpdate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                return await query.result(sqlUpdate, parameter);
            })
            .then((result) => {
                console.log(result);
                res.status(402).json({ response: 'Subject successfully updated.' })
            })
            .catch((err) => {
                console.log('Error at updateSubject: ', err);
                res.status(400).json({ response: 'Did not work at update subject method!' });
            });
    }

}

export default Update_SubjectDAO;