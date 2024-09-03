import { Router } from "express";
import create_ProgramController from "../controllers/programs/create_ProgramController";
import delete_ProgramController from "../controllers/programs/delete_ProgramController";
import read_ProgramController from "../controllers/programs/read_ProgramController";
import update_ProgramController from "../controllers/programs/update_ProgramController";

class ProgramRoutes{
    public routeProgramApi: Router;

    constructor(){
        this.routeProgramApi = Router();
        this.settings();

    }

    public settings(){
        this.routeProgramApi.post('/setprogram', create_ProgramController.create);
        this.routeProgramApi.get('/getprograms', read_ProgramController.getPrograms);
        this.routeProgramApi.get('/getprogram/:code', read_ProgramController.find);
        this.routeProgramApi.delete('/getprogram/:code', delete_ProgramController.delete);

        
        this.routeProgramApi.put('/setprograms/update', update_ProgramController.update);
    }
}

const programRoutes = new ProgramRoutes();
export default programRoutes.routeProgramApi;