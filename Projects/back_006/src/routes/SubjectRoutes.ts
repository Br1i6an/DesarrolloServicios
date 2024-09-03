import { Router } from "express";
import create_SubjectController from "../controllers/subjects/create_SubjectController";
import delete_SubjectController from "../controllers/subjects/delete_SubjectController";
import read_SubjectController from "../controllers/subjects/read_SubjectController";
import update_SubjectController from "../controllers/subjects/update_SubjectController";

class SubjectRoutes {

    public routeSubjectApi: Router;

    constructor() {
        this.routeSubjectApi = Router();
        this.settings();
    }

    public settings() {
        this.routeSubjectApi.get('/getsubjects', read_SubjectController.getSubjects);
        this.routeSubjectApi.post('/setsubject', create_SubjectController.create);
        this.routeSubjectApi.get('/getsubject/:code', read_SubjectController.find);
        this.routeSubjectApi.delete('/getsubject/:code', delete_SubjectController.delete);

        this.routeSubjectApi.put('/setsubject/update', update_SubjectController.update);

    }

}

const subjectRoutes = new SubjectRoutes();
export default subjectRoutes.routeSubjectApi;