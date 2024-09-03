import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_ProgramDAO {
    public static async createProgram(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { codProgram: 0 };
                }
            })
            .then((result) => {
                if (result.codProgram != 0) {
                    res.status(200).json({ response: 'Program successfully created.', newCod: result.codProgram })
                } else {
                    res.status(402).json({ response: 'Program unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at createProgram: ', err);
                res.status(400).json({ response: 'Did not work at create program method!' });
            });
    }
}

export default Create_ProgramDAO;