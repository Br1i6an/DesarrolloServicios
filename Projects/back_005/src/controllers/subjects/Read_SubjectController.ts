import { Request, Response } from 'express';
import readSubjectDAO from '../../daos/subjects/Read_SubjectDAO';
import { READ_SQL_SUBJECT } from '../../repositories/subjects/Read_Subject_sql';

class Read_Subject_Controller extends readSubjectDAO {

    public listSubj(req: Request, res: Response): void {
        Read_Subject_Controller.getSubjects(READ_SQL_SUBJECT.LIST, [], res);
    }

    public searchSubj(req: Request, res: Response): void {
        const code = req.params.theCode;
        const parameter = [code];
        readSubjectDAO.sortById(READ_SQL_SUBJECT.SEARCH, parameter, res);
    }
}
const read_Subject_Controller = new Read_Subject_Controller;
export default read_Subject_Controller;