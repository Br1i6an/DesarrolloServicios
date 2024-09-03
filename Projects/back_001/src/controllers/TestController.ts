import {Request, Response } from 'express';
import TestDao from '../daos/TestDAO';

class TestController extends TestDao{

    public attackme(req: Request, res: Response): void{
        TestController.getInfo(req,res);
    }
    
}


const testController = new TestController();
export default testController;