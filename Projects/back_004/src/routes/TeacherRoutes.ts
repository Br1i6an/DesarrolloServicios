import {Router} from 'express';
import teacherController from '../controllers/TeacherController';

class TeachersRoutes{
    public RouteTeacherApi: Router;

    constructor(){
        this.RouteTeacherApi= Router();
        this.settings();
    }
    public settings(){
        this.RouteTeacherApi.get('/iwantthemnow', teacherController.giveMeTeachers)
    }

}
const teachersRoutes = new TeachersRoutes();
export default teachersRoutes.RouteTeacherApi; 