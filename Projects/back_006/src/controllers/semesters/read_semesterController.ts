import { Response, Request } from "express";
import Read_SemesterDAO from "../../daos/semesters/read_semesterDAO";
import { SQL_READ_SEMESTER } from "../../repositories/semesters/read_semester_sql";

class Read_SemesterController extends Read_SemesterDAO {

    public getSemesters(req: Request, res: Response): void {
        Read_SemesterController.getSemesters(SQL_READ_SEMESTER.ALL, [], res);
    }

    public find(req: Request, res: Response): void {
        const cod = req.params.code;
        const parameter = [cod];

        Read_SemesterController.findById(SQL_READ_SEMESTER.LOAD, parameter, res);

    }

}

const read_SemesterController = new Read_SemesterController();
export default read_SemesterController;