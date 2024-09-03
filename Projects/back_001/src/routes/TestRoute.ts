import { Router } from "express";
import testController from '../controllers/TestController';


class TestRoute{

    public routeTestAPI;

    constructor(){
        this.routeTestAPI = Router();
        this.settings();
    }
    
    public settings(){
        this.routeTestAPI.get('/giveme', testController.attackme);
    }

}
const testRoute = new TestRoute();
export default testRoute.routeTestAPI;