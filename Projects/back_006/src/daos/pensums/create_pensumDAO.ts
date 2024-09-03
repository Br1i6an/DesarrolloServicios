import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_PensumDAO {
    public static async createPensum(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { codPensum: 0 };
                }
            })
            .then((result) => {
                if (result.codPensum != 0) {
                    res.status(200).json({ response: 'Pensum successfully created.', newCod: result.codPensum })
                } else {
                    res.status(402).json({ response: 'Pensum unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at createPensum: ', err);
                res.status(400).json({ response: 'Did not work at create pensum method!' });
            });
    }
}

export default Create_PensumDAO;