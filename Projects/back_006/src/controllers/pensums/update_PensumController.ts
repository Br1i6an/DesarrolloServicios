import { Response, Request } from "express";
import Update_PensumDAO from "../../daos/pensums/update_pensumDAO";
import { SQL_UPDATE_PENSUM } from "../../repositories/pensums/update_pensum_sql";

class Update_PensumController extends Update_PensumDAO {

    public update(req: Request, res: Response): void {
        const code = req.body.codPensum;
        const name = req.body.namePensum;
        const program = req.body.codProgram;
        const parameters = [program, name, code];
        Update_PensumController.updatePensum( SQL_UPDATE_PENSUM.UPDATE, parameters, res);
    }
}

const update_PensumController = new Update_PensumController();
export default update_PensumController;