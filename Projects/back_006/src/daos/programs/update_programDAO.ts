import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Update_ProgramDAO {

    public static async updateProgram(sqlUpdate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                return await query.result(sqlUpdate, parameter);
            })
            .then((result) => {
                console.log(result);
                res.status(402).json({ response: 'Program successfully updated.' })
            })
            .catch((err) => {
                console.log('Error at updateProgram: ', err);
                res.status(400).json({ response: 'Did not work at update program method!' });
            });
    }

}

export default Update_ProgramDAO;