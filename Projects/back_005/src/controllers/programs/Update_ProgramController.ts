import { Request, Response } from 'express';
import ProgramDaoUpdate from '../../daos/programs/Update_ProgramDAO';
import { UPDATE_SQL_PROGRAM } from '../../repositories/programs/Update_Program_sql';

class Update_ProgramController extends ProgramDaoUpdate {

    public updateProg(req: Request, res: Response): void {
        const id = req.body.programId;
        const name = req.body.programName;
        const parameter = [name, id];
        ProgramDaoUpdate.updatePrograms(UPDATE_SQL_PROGRAM.UPDATE, parameter, res);
    }

}
const update_ProgramController = new Update_ProgramController();
export default update_ProgramController;