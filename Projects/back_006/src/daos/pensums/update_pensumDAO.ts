import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Update_PensumDAO {
    
    public static async updatePensum(sqlUpdate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                return await query.result(sqlUpdate, parameter);
            })
            .then((result) => {
                console.log(result);
                res.status(402).json({ response: 'Pensum successfully updated.' })
            })
            .catch((err) => {
                console.log('Error at updatePensum: ', err);
                res.status(400).json({ response: 'Did not work at update pensum method!' });
            });
    }
}

export default Update_PensumDAO;