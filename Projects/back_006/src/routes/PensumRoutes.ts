import { Router } from "express";
import create_PensumController from "../controllers/pensums/create_PensumController";
import delete_pensumController from "../controllers/pensums/delete_PensumController";
import read_PensumController from "../controllers/pensums/read_PensumController";
import update_PensumController from "../controllers/pensums/update_PensumController";

class PensumRoutes{

    public routePensumApi: Router;

    constructor(){
        this.routePensumApi = Router();
        this.settings();
    }

    public settings(){
        this.routePensumApi.get('/getpensums', read_PensumController.getPensums);
        this.routePensumApi.post('/setpensum', create_PensumController.create);
        this.routePensumApi.get('/getpensum/:code', read_PensumController.find);
        this.routePensumApi.delete('/getpensum/:code', delete_pensumController.delete);

        this.routePensumApi.put('/setpensum/update', update_PensumController.update);

    }
}

const pensumRoutes = new PensumRoutes();
export default pensumRoutes.routePensumApi;