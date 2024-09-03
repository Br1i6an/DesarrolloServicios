import { Request, Response } from 'express';
import SubjectDaoUpdate from '../../daos/subjects/Update_SubjectDAO';
import { UPDATE_SQL_SUBJECT } from '../../repositories/subjects/Update_Subject_sql';

class Update_SubjectController extends SubjectDaoUpdate {

    public updateSubj(req: Request, res: Response): void {
        const id = req.body.programId;
        const name = req.body.programName;
        const parameter = [name, id];
        SubjectDaoUpdate.updateSubjects(UPDATE_SQL_SUBJECT.UPDATE, parameter, res);
    }

}
const update_SubjectController = new Update_SubjectController();
export default update_SubjectController;