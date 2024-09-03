import { Response, Request } from "express";
import Create_SubjectDAO from "../../daos/subjects/create_subjectDAO";
import { SQL_CREATE_SUBJECT } from "../../repositories/subjects/create_subject_sql";
import { SQL_READ_SUBJECT } from "../../repositories/subjects/read_subject_sql";

class Create_SubjectController  extends Create_SubjectDAO{
    
    public create(req: Request, res: Response): void {
        const name = req.body.nameSubject;
        const reference = req.body.referenceSubject;
        const parameter = [name, reference];
        Create_SubjectController.createSubject(SQL_READ_SUBJECT.VERIFY, SQL_CREATE_SUBJECT.CREATE, parameter, res);
    }
}

const create_SubjectController = new Create_SubjectController();
export default create_SubjectController;