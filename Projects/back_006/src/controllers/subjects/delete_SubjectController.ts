import { Response, Request } from "express";
import Delete_SubjectDAO from "../../daos/subjects/delete_subjectDAO";
import { SQL_DELETE_SUBJECT } from "../../repositories/subjects/delete_subject_sql";

class Delete_SubjectController extends Delete_SubjectDAO {
    public delete(req: Request, res: Response): void {
        const cod = req.params.code;
        const parameter = [cod];

        Delete_SubjectController.deleteById(SQL_DELETE_SUBJECT.DELETE, parameter, res);

    }
}

const delete_SubjectController = new Delete_SubjectController();
export default delete_SubjectController;