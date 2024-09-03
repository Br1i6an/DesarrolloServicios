import {Router} from 'express';
import createAccessController from '../../controllers/access/Create_AccessController';


class AccessRoutes{
    public RouteAccessApi: Router;

    constructor(){
        this.RouteAccessApi= Router();
        this.settings();
    }
    public settings(){
        this.RouteAccessApi.post('/access/create', createAccessController.saveAcc);
        //this.RouteAccessApi.get('/programs', readAccessController.listAcc);//This no
        //this.RouteProgramApi.get('/getprogram/:theCode', readProgramController.searchProg);//Search yes
        //this.RouteProgramApi.put('/programs/update', updateProgramController.updateProg)// Update yes 
        //this.RouteProgramApi.delete('/getprogram/:theCode', deleteProgramController.deleteProg);//Delete yes

    }

}
const programsRoutes = new AccessRoutes();
export default programsRoutes.RouteAccessApi; 