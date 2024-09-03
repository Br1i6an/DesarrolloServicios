import { Request, Response } from "express";
import { SQL_CREATE_PROGRAM } from "../../repositories/programs/create_program_sql";
import { SQL_READ_PROGRAM } from "../../repositories/programs/read_program_sql";
import Create_ProgramDAO from "../../daos/programs/create_programDAO";

class Create_ProgramController extends Create_ProgramDAO{
    public create(req: Request, res: Response): void {
        const name = req.body.nameProgram;
        const parameter = [name];
        Create_ProgramController.createProgram(SQL_READ_PROGRAM.VERIFY, SQL_CREATE_PROGRAM.CREATE, parameter, res);
    }
}

const create_ProgramController = new Create_ProgramController();
export default create_ProgramController;