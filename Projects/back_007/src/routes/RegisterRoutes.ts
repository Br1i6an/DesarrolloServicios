import {Router} from 'express';
import register_AccessController from '../controllers/access/Register_AccessController';


class RegisterRoutes{
    public RegisterRouteAccessApi: Router;

    constructor(){
        this.RegisterRouteAccessApi= Router();
        this.settings();
    }
    public settings(){
        this.RegisterRouteAccessApi.get('/access/register', register_AccessController.getAccess);


    }
}
const registerRoutes = new RegisterRoutes();
export default registerRoutes.RegisterRouteAccessApi; 