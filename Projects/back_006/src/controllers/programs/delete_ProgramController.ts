import { Response, Request } from "express";
import Delete_ProgramDAO from "../../daos/programs/delete_programDAO";
import { SQL_DELETE_PROGRAM } from "../../repositories/programs/delete_program_sql";

class Delete_ProgramController extends Delete_ProgramDAO{
    public delete(req: Request, res: Response): void {
        const cod = req.params.code;
        const parameter = [cod];

        Delete_ProgramController.deleteById(SQL_DELETE_PROGRAM.DELETE, parameter, res);

    }
}

const delete_ProgramController = new Delete_ProgramController();
export default delete_ProgramController;