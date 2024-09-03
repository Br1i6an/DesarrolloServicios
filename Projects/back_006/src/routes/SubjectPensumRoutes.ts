import { Router } from "express";
import subjectPensumController from "../controllers/SubjectPensumController";

class SubjectPensumRoutes {

    public routeSubjectPensumApi: Router;

    constructor() {
        this.routeSubjectPensumApi = Router();
        this.settings();
    }

    public settings() {
        this.routeSubjectPensumApi.get('/getsubjectpensum', subjectPensumController.getSubjectPensum);
    }
}

const subjectPensumRoutes = new SubjectPensumRoutes();
export default subjectPensumRoutes.routeSubjectPensumApi;