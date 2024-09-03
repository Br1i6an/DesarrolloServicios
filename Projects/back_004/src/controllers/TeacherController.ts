import {Request, Response} from'express';
import TeacherDao from '../daos/TeacherDAO';
import  { SQL_TEACHER } from '../repositories/teacher_sql';

class TeacherController extends TeacherDao{

    public giveMeTeachers(req: Request, res: Response):void{
        TeacherController.getTeacher(SQL_TEACHER.ALL,[],res);
    }

}
const teacherController = new TeacherController();
export default teacherController;