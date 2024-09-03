import { Request, Response } from 'express';
import createSubjectDao from '../../daos/subjects/Create_SubjecDAO';
import { CREATE_SQL_SUBJECT } from '../../repositories/subjects/Create_Subject_sql';
import { READ_SQL_SUBJECT } from '../../repositories/subjects/Read_Subject_sql';

class Create_Subject_Controller extends createSubjectDao{

    public saveSubj(req: Request, res: Response): void {
        const name = req.body.subjectName;
        const parameter = [name];
        Create_Subject_Controller.createSubjects(READ_SQL_SUBJECT.CONFIRM, CREATE_SQL_SUBJECT.CREATE, parameter, res);
    }
}
const create_Subject_Controller=new Create_Subject_Controller();
export default create_Subject_Controller;
