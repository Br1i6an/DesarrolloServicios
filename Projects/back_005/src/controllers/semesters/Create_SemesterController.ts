import { Request, Response } from 'express';
import createSemesterDao from '../../daos/semesters/Create_SemesterDAO';
import { CREATE_SQL_SEMESTER } from '../../repositories/semesters/Create_Semester_sql';
import { READ_SQL_SEMESTER } from '../../repositories/semesters/Read_Semester_sql';

class Create_Semester_Controller extends createSemesterDao {

    public saveSem(req: Request, res: Response): void {
        const name = req.body.semesterName;
        const parameter = [name];
        Create_Semester_Controller.createSemesters( READ_SQL_SEMESTER.CONFIRM,CREATE_SQL_SEMESTER.CREATE, parameter, res);
    };

}
const create_Semester_Controller = new Create_Semester_Controller();
export default create_Semester_Controller;