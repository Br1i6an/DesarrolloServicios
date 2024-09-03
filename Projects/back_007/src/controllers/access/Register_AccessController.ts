import {Response, Request} from "express";
import { SQL_ACCESS } from "../../repositories/access/Access_sql";
import Register_AccessDAO from "../../daos/access/Register_AccessDAO";

class Register_AccessController extends Register_AccessDAO{
    public getAccess(req: Request, res:Response): void{
        Register_AccessController.getEntries(SQL_ACCESS.DATACCESS,[],res);

    }
}
const register_AccessController = new Register_AccessController()
export default register_AccessController;