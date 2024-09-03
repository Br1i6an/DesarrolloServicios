import {Router} from 'express';
import access_Controller from '../controllers/access/AccessController';



class AccessRoutes{
    public RouteAccessApi: Router;

    constructor(){
        this.RouteAccessApi= Router();
        this.settings();
    }
    public settings(){
        this.RouteAccessApi.post('/access/login', access_Controller.saveAcc);
        //this.RouteAccessApi.get('/programs', readAccessController.listAcc);//This no
        //this.RouteProgramApi.get('/getprogram/:theCode', readProgramController.searchProg);//Search yes
        //this.RouteProgramApi.put('/programs/update', updateProgramController.updateProg)// Update yes 
        //this.RouteProgramApi.delete('/getprogram/:theCode', deleteProgramController.deleteProg);//Delete yes

    }

}
const accessRoutes = new AccessRoutes();
export default accessRoutes.RouteAccessApi; 