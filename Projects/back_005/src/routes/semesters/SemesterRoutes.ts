import {Router} from 'express';
import createSemesterController from '../../controllers/semesters/Create_SemesterController';
import readSemesterController from '../../controllers/semesters/Read_SemesterController';
import updateSemesterController from '../../controllers/semesters/Update_SemesterController';
import deleteSemesterController from '../../controllers/semesters/Delete_SemesterController';
class SemestersRoutes{
    public RouteSemesterApi: Router;

    constructor(){
        this.RouteSemesterApi= Router();
        this.settings();
    }
    public settings(){
        this.RouteSemesterApi.post('/semesters/create', createSemesterController.saveSem);
        this.RouteSemesterApi.get('/semesters', readSemesterController.listSem);       
        this.RouteSemesterApi.get('/getsemester/:theCode', readSemesterController.searchSem);
        this.RouteSemesterApi.put('/semesters/update', updateSemesterController.updateSem);
        this.RouteSemesterApi.delete('/getsemester/:theCode', deleteSemesterController.deleteSem);

    }

}
const semestersRoutes = new SemestersRoutes();
export default semestersRoutes.RouteSemesterApi; 