import { Request, Response } from 'express';
import readSemesterDAO from '../../daos/semesters/Read_SemesterDAO';
import { READ_SQL_SEMESTER } from '../../repositories/semesters/Read_Semester_sql';

class Read_Semester_Controller extends readSemesterDAO {
    
    public listSem(req: Request, res: Response): void {
        Read_Semester_Controller.getSemesters(READ_SQL_SEMESTER.LIST, [], res);
    }

    public searchSem(req: Request, res: Response): void {
        const code = req.params.theCode;
        const parameter = [code];
        readSemesterDAO.sortById(READ_SQL_SEMESTER.SEARCH, parameter, res);
    }
}
const read_Semester_Controller = new Read_Semester_Controller();
export default read_Semester_Controller;