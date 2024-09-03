import { Response, Request } from "express";
import Verify_accessDAO from "../../daos/access/verify_accessDAO";
import { SQL_ACCESS } from "../../repositories/access/Access_sql";

class Access_Controller extends Verify_accessDAO{
    public saveAcc(req: Request, res: Response): void {
        const email = req.body.email;
        const pass = req.body.pass;
        const parameter = [email,pass];
        Access_Controller.verifyAccess( SQL_ACCESS.VERIFY, parameter, res);
    };
}
const access_Controller = new Access_Controller();
export default access_Controller;

