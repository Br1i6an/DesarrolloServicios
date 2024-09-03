import { Response, Request } from "express";
import SubjectPensumDAO from "../daos/SubjectPensumDAO";
import { SQL_SUBJECTPENSUM } from "../repositories/subjectpensum_sql";

class SubjectPensumController extends SubjectPensumDAO {
    public getSubjectPensum(req: Request, res: Response): void {
        SubjectPensumController.getSubjectPensum(SQL_SUBJECTPENSUM.ALL, [], res);
    }
}

const subjectPensumController = new SubjectPensumController();
export default subjectPensumController;