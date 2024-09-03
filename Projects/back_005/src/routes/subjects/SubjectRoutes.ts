import {Router} from 'express';
import createSubjectController from '../../controllers/subjects/Create_SubjectController';
import readSubjectController from '../../controllers/subjects/Read_SubjectController';
import updateSubjectController from '../../controllers/subjects/Update_SubjectController';
import deleteSubjectController from '../../controllers/subjects/Delete_SubjectController';

class SubjectsRoutes{
    public RouteSubjectApi: Router;

    constructor(){
        this.RouteSubjectApi= Router();
        this.settings();
    }
    public settings(){
        this.RouteSubjectApi.post('/subjects/create', createSubjectController.saveSubj);
        this.RouteSubjectApi.get('/subjects', readSubjectController.listSubj);       
        this.RouteSubjectApi.get('/getsubject/:theCode', readSubjectController.searchSubj);
        this.RouteSubjectApi.put('/subjects/update', updateSubjectController.updateSubj);
        this.RouteSubjectApi.delete('/getsubject/:theCode', deleteSubjectController.deleteSubj);

    }

}
const subjectsRoutes = new SubjectsRoutes();
export default subjectsRoutes.RouteSubjectApi; 