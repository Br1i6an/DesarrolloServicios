import { Response } from 'express';
import pool from '../../settings/connections/connectionDb';

class Create_Subject_DAO {

    public static async createSubjects(sqlConfirm: string, sqlCreate: string, parameters: any, res: Response): Promise<any> {
        await pool
            .task(async (consult) => {
                const data = await consult.one(sqlConfirm, parameters);
                if (data.amount == 0) {
                    return await consult.one(sqlCreate, parameters);
                } else {
                    return { subjectId: 0 };
                }
            })
            .then((responses) => {
                if (responses.subjectId != 0) {
                    res.status(200).json({
                        msg: 'Subject Created Succesfully ',
                        newCode: responses.subjectId
                    });
                } else {
                    res.status(402).json({
                        msg: 'Error Creating Subject, \
                it might be repeated '});
                }
            })
            .catch((miError) => {
                console.log("F", miError);
                res.status(400).json({ msg: "Error in the consult " });
            });
    }
}
export default Create_Subject_DAO;