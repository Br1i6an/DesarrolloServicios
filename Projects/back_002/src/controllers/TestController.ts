import { Request, Response } from 'express';
import TestDao from '../daos/TestDao';

class TestController extends TestDao {

    public attackme1(req: Request, res: Response): void {
        TestController.getInfo1(req, res);
    }
    public attackme2(req: Request, res: Response): void {
        TestController.getInfo2(req, res);
    }
    public attackme3(req: Request, res: Response): void {
        TestController.getInfo3(req, res);
    }

}
const testController = new TestController();
export default testController;