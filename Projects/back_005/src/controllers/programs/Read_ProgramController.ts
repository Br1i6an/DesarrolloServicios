import { Request, Response } from 'express';
import readProgramDAO from '../../daos/programs/Read_ProgramDAO';
import { READ_SQL_PROGRAM } from '../../repositories/programs/Read_Program_sql';

class Read_Program_Controller extends readProgramDAO {
    
    public listProg(req: Request, res: Response): void {
        Read_Program_Controller.getPrograms(READ_SQL_PROGRAM.LIST, [], res);
    }

    public searchProg(req: Request, res: Response): void {
        const code = req.params.theCode;
        const parameter = [code];
        readProgramDAO.sortById(READ_SQL_PROGRAM.SEARCH, parameter, res);
    }
}
const read_Program_Controller = new Read_Program_Controller();
export default read_Program_Controller;