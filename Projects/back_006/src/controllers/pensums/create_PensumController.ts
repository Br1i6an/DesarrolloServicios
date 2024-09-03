import { Response, Request } from "express";
import Create_PensumDAO from "../../daos/pensums/create_pensumDAO";
import { SQL_CREATE_PENSUM } from "../../repositories/pensums/create_pensum_sql";
import { SQL_READ_PENSUM } from "../../repositories/pensums/read_pensum_sql";

class Create_PensumController extends Create_PensumDAO {
    public create(req: Request, res: Response): void {
        const name = req.body.namePensum;
        const program = req.body.codProgram;
        const parameter = [program, name];
        Create_PensumController.createPensum(SQL_READ_PENSUM.VERIFY, SQL_CREATE_PENSUM.CREATE, parameter, res);
    }
}

const create_PensumController = new Create_PensumController();
export default create_PensumController;