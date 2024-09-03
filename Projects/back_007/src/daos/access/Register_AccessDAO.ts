import { Response } from "express";
import pool from "../../settings/connections/connectionDb";


class Register_AccessDAO{
    public static async getEntries(sqlQuery: string, parameter: any, res: Response): Promise <any>{
        pool.result(sqlQuery, parameter)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((err)=>{
            console.log('Error: ', err);
        res.status(400).json({response:'Does not work '});
        })
    }
}
export default Register_AccessDAO;