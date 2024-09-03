import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class Delete_Program_DAO {
    
    protected static async deleteById(sqlSearch: string, params: any, res: Response): Promise<any> {
        await pool.result(sqlSearch, params)
            .then((datas) => {
                console.log(datas);
                return res.status(200).json({ response: datas.rowCount })

            })
            .catch((myError) => {
                console.log(myError);
                return res.status(400).json({ msg: 'Error deleting Program' });
            });

    }
}
export default Delete_Program_DAO;