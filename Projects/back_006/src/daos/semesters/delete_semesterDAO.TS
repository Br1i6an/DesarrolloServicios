import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Delete_SemesterDAO {
    protected static async deleteById(sqlDelete: string, params: any, res: Response): Promise<any> {
        await pool.result(sqlDelete, params)
            .then((result) => {

                console.log(result);
                return res.status(200).json({ response: result.rowCount });

            })
            .catch((err) => {

                console.log('Error at semester deleteById method.', err);
                res.status(400).json({ response: 'Error at semester delete by id.' });

            });
    }
}

export default Delete_SemesterDAO;