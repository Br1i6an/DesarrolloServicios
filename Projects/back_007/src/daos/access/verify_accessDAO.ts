import { Response } from "express";
import Response_AccessDAO from "./Response_AccessDAO";
import pool from "../../settings/connections/connectionDb";



class Verify_accessDAO {

    protected static async verifyAccess(sqlQuery: string, params: any, res: Response): Promise<any> {
        await pool.oneOrNone(sqlQuery, params)
            .then((result) => {
                return Response_AccessDAO.process(result, res);
            })
            .catch((err) => {
                console.log('Error verifying access method.', err);
                res.status(500).json({ response: 'Server Error' });

            });
    }

 
}

export default Verify_accessDAO;