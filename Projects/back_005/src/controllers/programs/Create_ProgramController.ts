import { Request, Response } from 'express';
import createProgramDao from '../../daos/programs/Create_ProgramDAO';
import { CREATE_SQL_PROGRAM } from '../../repositories/programs/Create_Program_sql';
import { READ_SQL_PROGRAM } from '../../repositories/programs/Read_Program_sql';

class Create_Access_Controller extends createProgramDao {

    public saveProg(req: Request, res: Response): void {
        const name = req.body.programName;
        const parameter = [name];
        Create_Access_Controller.createPrograms( READ_SQL_PROGRAM.CONFIRM,CREATE_SQL_PROGRAM.CREATE, parameter, res);
    };

}
const create_Access_Controller = new Create_Access_Controller();
export default create_Access_Controller;