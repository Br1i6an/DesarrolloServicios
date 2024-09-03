import { Request, Response } from 'express';
import readAccessDao from '../../daos/access/Read_Access_DAO';
import { CREATE_SQL_ACCESS } from '../../repositories/access/Create_Access_sql';
import { READ_SQL_ACCESS } from '../../repositories/access/Read_Access_sql';

class Create_Access_Controller extends readAccessDao {

    public saveAcc(req: Request, res: Response): void {
        const email = req.body.Email;
        const key = req.body.key;
        const parameter = [email,key];
        Create_Access_Controller.sortById( READ_SQL_ACCESS.VALIDATE, parameter, res);
    };

}
const create_Access_Controller = new Create_Access_Controller();
export default create_Access_Controller;