import { Router } from "express";
import verify_AccessController from "../controllers/access/verify_AccessController";

class VerifyRoutes{

    public routeAccessApi: Router;

    constructor(){
        this.routeAccessApi = Router();
        this.settings();
    }

    public settings(){
        this.routeAccessApi.post('/access', verify_AccessController.verify);
        
    }
}

const verifyRoutes = new VerifyRoutes();
export default verifyRoutes.routeAccessApi;