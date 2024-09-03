import { Request, Response } from "express";
import Read_ProgramDAO from "../../daos/programs/read_programDAO";
import { SQL_READ_PROGRAM } from "../../repositories/programs/read_program_sql";

class Read_ProgramController extends Read_ProgramDAO{
    public getPrograms(req: Request, res: Response): void {
        Read_ProgramController.getPrograms(SQL_READ_PROGRAM.ALL, [], res);

    }

    public find(req: Request, res: Response): void {
        const cod = req.params.code;
        const parameter = [cod];

        Read_ProgramController.findById(SQL_READ_PROGRAM.LOAD, parameter, res);

    }
}

const read_ProgramController = new Read_ProgramController();
export default read_ProgramController;