import { Request, Response } from "express";
import Update_SubjectDAO from "../../daos/subjects/update_subjectDAO";
import { SQL_UPDATE_SUBJECT } from "../../repositories/subjects/update_subject_sql";

class Update_SubjectController extends Update_SubjectDAO{

    public update(req: Request, res: Response): void {
        const code = req.body.codSubject;
        const name = req.body.nameSubject;
        const reference = req.body.referenceSubject;
        const parameters = [name, reference, code];
        Update_SubjectController.updateSubject( SQL_UPDATE_SUBJECT.UPDATE, parameters, res);
    }
}

const update_SubjectController = new Update_SubjectController();
export default update_SubjectController;