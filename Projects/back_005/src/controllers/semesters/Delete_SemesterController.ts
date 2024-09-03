import { Request, Response } from 'express';
import deleteSemesterDAO from '../../daos/semesters/Delete_SemesterDAO';
import { DELETE_SQL_SEMESTER } from '../../repositories/semesters/Delete_Semester_sql';

class Delete_Semester_Controller extends deleteSemesterDAO {

    public deleteSem(req: Request, res: Response): void {
        const code = req.params.theCode;
        const parameter = [code];
        Delete_Semester_Controller.deleteById(DELETE_SQL_SEMESTER.DELETE, parameter, res);
    }

}
const delete_Semester_Controller = new Delete_Semester_Controller();
export default delete_Semester_Controller;