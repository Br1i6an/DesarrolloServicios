import { Request, Response } from "express";
import Update_ProgramDAO from "../../daos/programs/update_programDAO";
import { SQL_UPDATE_PROGRAMS } from "../../repositories/programs/update_program_sql";

class Update_ProgramController extends Update_ProgramDAO {

    public update(req: Request, res: Response): void {
        const code = req.body.codProgram;
        const name = req.body.nameProgram;
        const parameters = [name, code];
        Update_ProgramController.updateProgram( SQL_UPDATE_PROGRAMS.UPDATE, parameters, res);
    }

}

const update_ProgramController = new Update_ProgramController();
export default update_ProgramController;