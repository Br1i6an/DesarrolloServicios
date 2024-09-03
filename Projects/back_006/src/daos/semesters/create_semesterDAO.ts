import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_SemesterDAO {
    public static async createSemester(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { codSemester: 0 };
                }
            })
            .then((result) => {
                if (result.codSemester != 0) {
                    res.status(200).json({ response: 'Semester successfully created.', newCod: result.codSemester })
                } else {
                    res.status(402).json({ response: 'Semester unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at createSemester: ', err);
                res.status(400).json({ response: 'Did not work at create semester method!' });
            });
    }
}

export default Create_SemesterDAO;