import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class SubjectDAO {

    public static async getSubjects(sqlConsult: string, parameters: any, res: Response):Promise<any>{
        pool.result(sqlConsult, parameters)
        .then((results)=>{
            res.status(200).json(results.rows);
        })
        .catch((myError)=>{
            console.log('Error!',myError);
            res.status(400).json({respuesta: 'Does not work'});
        });

    }
      protected static async sortById(sqlSearch: string, params: any, res: Response): Promise<any>{
        await pool.one(sqlSearch,params)
        .then((datas)=>{
          console.log(datas);
          return res.status(200).json({response: datas})

        })
        .catch((myError)=>{
            console.log(myError);
            return res.status(400).json({msg:'Error searching Subject'});
        });

      }

      protected static async deleteById(sqlSearch: string, params: any, res: Response): Promise<any>{
        await pool.result(sqlSearch,params)
        .then((datas)=>{
          console.log(datas);
          return res.status(200).json({response: datas.rowCount})

        })
        .catch((myError)=>{
            console.log(myError);
            return res.status(400).json({msg:'Error deleting Subject'});
        });

      }

}
export default SubjectDAO;