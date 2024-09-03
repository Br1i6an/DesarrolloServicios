import {Router} from 'express';
import createProgramController from '../../controllers/programs/Create_ProgramController';
import readProgramController from '../../controllers/programs/Read_ProgramController';
import updateProgramController from '../../controllers/programs/Update_ProgramController';
import deleteProgramController from '../../controllers/programs/Delete_ProgramController';

class ProgramsRoutes{
    public RouteProgramApi: Router;

    constructor(){
        this.RouteProgramApi= Router();
        this.settings();
    }
    public settings(){
        this.RouteProgramApi.post('/programs/create', createProgramController.saveProg);
        this.RouteProgramApi.get('/programs', readProgramController.listProg);//List yes
        this.RouteProgramApi.get('/getprogram/:theCode', readProgramController.searchProg);//Search yes
        this.RouteProgramApi.put('/programs/update', updateProgramController.updateProg)// Update yes 
        this.RouteProgramApi.delete('/getprogram/:theCode', deleteProgramController.deleteProg);//Delete yes

    }

}
const programsRoutes = new ProgramsRoutes();
export default programsRoutes.RouteProgramApi; 