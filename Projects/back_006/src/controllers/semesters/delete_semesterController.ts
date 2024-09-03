import { Response, Request } from "express";
import Delete_SemesterDAO from "../../daos/semesters/delete_semesterDAO";
import { SQL_DELETE_SEMESTER } from "../../repositories/semesters/delete_semester_sql";

class Delete_SemesterController extends Delete_SemesterDAO {
    public delete(req: Request, res: Response): void {
        const cod = req.params.code;
        const parameter = [cod];

        Delete_SemesterController.deleteById(SQL_DELETE_SEMESTER.DELETE, parameter, res);

    }
}

const delete_SemesterController = new Delete_SemesterController();
export default delete_SemesterController;