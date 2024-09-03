import { Request, Response } from 'express';
import SemesterDaoUpdate from '../../daos/semesters/Update_SemesterDAO';
import { UPDATE_SQL_SEMESTER } from '../../repositories/semesters/Update_Semester_sql';

class Update_SemesterController extends SemesterDaoUpdate {

    public updateSem(req: Request, res: Response): void {
        const id = req.body.programId;
        const name = req.body.programName;
        const parameter = [name, id];
        SemesterDaoUpdate.updateSemesters(UPDATE_SQL_SEMESTER.UPDATE, parameter, res);
    }

}
const update_SemesterController = new Update_SemesterController();
export default update_SemesterController;