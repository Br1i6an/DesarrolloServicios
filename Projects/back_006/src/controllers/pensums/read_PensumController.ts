import { Response, Request } from "express";
import Read_PensumDAO from "../../daos/pensums/read_pensumDAO";
import { SQL_READ_PENSUM } from "../../repositories/pensums/read_pensum_sql";

class Read_PensumController extends Read_PensumDAO {
    public getPensums(req: Request, res: Response): void {
        Read_PensumController.getPensums(SQL_READ_PENSUM.ALL, [], res);
    }

    public find(req: Request, res: Response): void {
        const cod = req.params.code;
        const parameter = [cod];

        Read_PensumController.findById(SQL_READ_PENSUM.LOAD, parameter, res);

    }
}

const read_PensumController = new Read_PensumController();
export default read_PensumController;