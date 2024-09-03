import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_SubjectDAO {
    public static async createSubject(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { codSubject: 0 };
                }
            })
            .then((result) => {
                if (result.codSubject != 0) {
                    res.status(200).json({ response: 'Subject successfully created.', newCod: result.codSubject })
                } else {
                    res.status(402).json({ response: 'Subject unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at createSubject: ', err);
                res.status(400).json({ response: 'Did not work at create subject method!' });
            });
    }
}

export default Create_SubjectDAO;