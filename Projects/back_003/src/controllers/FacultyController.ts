import {Request, Response} from'express';
import FacultyDao from '../daos/FacultyDAO';
import  { SQL_FACULTY } from '../repositories/faculty_sql';

class FacultyController extends FacultyDao{

    public giveMeFaculties(req: Request, res: Response):void{
        FacultyController.getFacul(SQL_FACULTY.ALL,[],res);
    }

}
const facultyController = new FacultyController();
export default facultyController;