import { Router } from "express";
import create_SemesterController from "../controllers/semesters/create_semesterController";
import delete_SemesterController from "../controllers/semesters/delete_semesterController";
import read_SemesterController from "../controllers/semesters/read_semesterController";
import update_SemesterController from "../controllers/semesters/update_semesterController";

class SemesterRoutes {

    public routeSemesterApi: Router;

    constructor() {
        this.routeSemesterApi = Router();
        this.settings();
    }

    public settings() {
        this.routeSemesterApi.get('/getsemesters', read_SemesterController.getSemesters);
        this.routeSemesterApi.get('/getsemester/:code', read_SemesterController.find);
        this.routeSemesterApi.delete('/getsemester/:code', delete_SemesterController.delete);
        this.routeSemesterApi.post('/setsemester', create_SemesterController.create);
        this.routeSemesterApi.put('/setsemester/update', update_SemesterController.update);
    }

}

const semesterRoutes = new SemesterRoutes();
export default semesterRoutes.routeSemesterApi;