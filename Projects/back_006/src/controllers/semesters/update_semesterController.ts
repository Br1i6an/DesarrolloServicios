import { Response, Request } from "express";
import Update_SemesterDAO from "../../daos/semesters/update_semesterDAO";
import { SQL_UPDATE_SEMESTER } from "../../repositories/semesters/update_semester_sql";

class Update_SemesterController extends Update_SemesterDAO {

    public update(req: Request, res: Response): void {
        const code = req.body.codSemester;
        const name = req.body.nameSemester;
        const parameters = [name, code];
        Update_SemesterController.updateSemester( SQL_UPDATE_SEMESTER.UPDATE, parameters, res);
    }
}

const update_SemesterController = new Update_SemesterController();
export default update_SemesterController;