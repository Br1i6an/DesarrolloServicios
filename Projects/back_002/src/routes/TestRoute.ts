import { Router } from "express";
import testController from '../controllers/TestController'

class TestRoute {

    public routeTestAPI;

    constructor() {
        this.routeTestAPI = Router();
        this.settings();
    }

    public settings() {
        this.routeTestAPI.get('/giveme1', testController.attackme1);
        this.routeTestAPI.get('/giveme2', testController.attackme2);
        this.routeTestAPI.get('/giveme3', testController.attackme3);
    }

}
const testRoute = new TestRoute();
export default testRoute.routeTestAPI;