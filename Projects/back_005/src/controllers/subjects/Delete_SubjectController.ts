import { Request, Response } from 'express';
import deleteSubjectDAO from '../../daos/subjects/Delete_SubjectDAO';
import { DELETE_SQL_SUBJECT } from '../../repositories/subjects/Delete_Subject_sql';

class Delete_Subject_Controller extends deleteSubjectDAO {

    public deleteSubj(req: Request, res: Response): void {
        const code = req.params.theCode;
        const parameter = [code];
        Delete_Subject_Controller.deleteById(DELETE_SQL_SUBJECT.DELETE, parameter, res);
    }

}
const delete_Program_Controller = new Delete_Subject_Controller();
export default delete_Program_Controller;