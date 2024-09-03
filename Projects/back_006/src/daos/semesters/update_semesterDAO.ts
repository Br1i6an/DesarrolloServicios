import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Update_SemesterDAO {

    public static async updateSemester(sqlUpdate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                return await query.result(sqlUpdate, parameter);
            })
            .then((result) => {
                console.log(result);
                res.status(402).json({ response: 'Semester successfully updated.' })
            })
            .catch((err) => {
                console.log('Error at updateSemester method: ', err);
                res.status(400).json({ response: 'Did not work at update semester method!' });
            });
    }

}

export default Update_SemesterDAO;