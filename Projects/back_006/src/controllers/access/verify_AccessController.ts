import { Response, Request } from "express";
import { SQL_VERIFY_ACCESS } from "../../repositories/access/verify_access_sql";
import Verify_accessDAO from "../../daos/access/verify_accessDAO";

class Verify_AccessController extends Verify_accessDAO {

    public verify(req: Request, res: Response): void {
        const email = req.body.email;
        const pass = req.body.pass;
        const parameter = [email, pass];

        Verify_AccessController.verifyAccess(SQL_VERIFY_ACCESS.VERIFY, parameter, res);

    }
}

const verify_AccessController = new Verify_AccessController();
export default verify_AccessController;