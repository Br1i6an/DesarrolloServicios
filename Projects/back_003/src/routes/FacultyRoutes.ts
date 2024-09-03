import {Router} from 'express';
import facultyController from '../controllers/FacultyController';

class FacultiesRoutes{
    public RouteFacultyApi: Router;

    constructor(){
        this.RouteFacultyApi= Router();
        this.settings();
    }
    public settings(){
        this.RouteFacultyApi.get('/iwantthemnow', facultyController.giveMeFaculties)
    }

}
const facultiesRoutes = new FacultiesRoutes();
export default facultiesRoutes.RouteFacultyApi; 