import { Request, Response } from 'express';
import SubjectDAO from '../../daos/subjects/SubjectDAO';
import { SQL_SUBJECT } from '../../repositories/subjects/Subject_sql';

class SubjectController extends SubjectDAO {

    public giveMeSubjects(req: Request, res: Response): void {
        //SubjectController.getSubjects(SQL_SUBJECT.ALL, [], res);
    }

    public saveSubjects(req: Request, res: Response): void {
        const name = req.body.programName;
        const parameter = [name];
        //SubjectController.createSubjects(SQL_SUBJECT.CREATE, SQL_SUBJECT.CREATE, parameter, res);
    }

    public searchOneMan(req: Request, res: Response): void {
        const code = req.params.theCode;
        const parameter = [code];
        SubjectDAO.sortById(SQL_SUBJECT.SEARCH, parameter, res);
    }

    public deleteOneMan(req: Request, res: Response): void {
        const code = req.params.theCode;
        const parameter = [code];
        SubjectDAO.deleteById(SQL_SUBJECT.DELETE, parameter, res);
    }


}
const subjectController = new SubjectController();
export default subjectController;