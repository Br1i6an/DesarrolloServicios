import { Response } from 'express';
import pool from '../settings/connection/connectionDb';

class FacultyDAO {

    public static async getFacul(sqlConsult: string, parameters: any, res: Response):Promise<any>{
        pool.result(sqlConsult, parameters)
        .then((results)=>{
            res.status(200).json(results.rows);
        })
        .catch((myError)=>{
            console.log('Error!',myError);
            res.status(400).json({respuesta: 'Does not work'});
        });

    }

}
export default FacultyDAO;