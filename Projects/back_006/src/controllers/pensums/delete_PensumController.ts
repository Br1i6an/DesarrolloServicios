import { Response, Request } from "express";
import Delete_PensumDAO from "../../daos/pensums/delete_pensumDAO";
import { SQL_DELETE_PENSUM } from "../../repositories/pensums/delete_pensum_sql";

class Delete_PensumController extends Delete_PensumDAO {
    
    public delete(req: Request, res: Response): void {
        const cod = req.params.code;
        const parameter = [cod];

        Delete_PensumController.deleteById(SQL_DELETE_PENSUM.DELETE, parameter, res);

    }
}

const delete_pensumController = new Delete_PensumController();
export default delete_pensumController;