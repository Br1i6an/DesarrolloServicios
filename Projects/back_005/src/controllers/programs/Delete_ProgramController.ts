import { Request, Response } from 'express';
import deleteProgramDAO from '../../daos/programs/Delete_ProgramDAO';
import { DELETE_SQL_PROGRAM } from '../../repositories/programs/Delete_Program_sql';

class Delete_Program_Controller extends deleteProgramDAO {

    public deleteProg(req: Request, res: Response): void {
        const code = req.params.theCode;
        const parameter = [code];
        Delete_Program_Controller.deleteById(DELETE_SQL_PROGRAM.DELETE, parameter, res);
    }

}
const delete_Program_Controller = new Delete_Program_Controller();
export default delete_Program_Controller;