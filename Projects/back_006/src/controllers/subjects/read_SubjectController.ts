import { Response, Request } from "express";
import Read_SubjectDAO from "../../daos/subjects/read_subjectDAO";
import { SQL_READ_SUBJECT } from "../../repositories/subjects/read_subject_sql";

class Read_SubjectController extends Read_SubjectDAO {

    public getSubjects(req: Request, res: Response): void {
        Read_SubjectController.getSubjects(SQL_READ_SUBJECT.ALL, [], res);
    }

    public find(req: Request, res: Response): void {
        const cod = req.params.code;
        const parameter = [cod];

        Read_SubjectController.findById(SQL_READ_SUBJECT.LOAD, parameter, res);

    }
}

const read_SubjectController = new Read_SubjectController();
export default read_SubjectController;