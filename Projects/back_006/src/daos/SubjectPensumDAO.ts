import { Response } from "express";
import pool from "../settings/connection/connectionDB";

class SubjectPensumDAO {
    public static async getSubjectPensum(sqlQuery: string, parameter: any, res: Response): Promise<any> {
        pool.result(sqlQuery, parameter)
            .then((result) => {
                res.status(200).json(result.rows);
            })
            .catch((err) => {
                console.log('Error at getSubjectPensum method!');
                res.status(400).json({ response: 'Error to get subjectpensum json.' });
            });
    }
}

export default SubjectPensumDAO;