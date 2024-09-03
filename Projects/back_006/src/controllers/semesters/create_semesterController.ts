import { Response, Request } from "express";
import Create_SemesterDAO from "../../daos/semesters/create_semesterDAO";
import { SQL_CREATE_SEMESTER } from "../../repositories/semesters/create_semester_sql";
import { SQL_READ_SEMESTER } from "../../repositories/semesters/read_semester_sql";

class Create_SemesterController extends Create_SemesterDAO {
    public create(req: Request, res: Response): void {
        const name = req.body.nameSemester;
        const parameter = [name];
        Create_SemesterController.createSemester(SQL_READ_SEMESTER.VERIFY, SQL_CREATE_SEMESTER.CREATE, parameter, res);
    }
}

const create_SemesterController = new Create_SemesterController();
export default create_SemesterController;