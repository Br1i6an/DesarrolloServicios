import {Response, Request} from 'express';
class TestDAO{

    protected static async getInfo1(req:Request, res:Response): Promise<any>{
        const firstJson ={Author: 'Brian', assignment: 'ONE'};

        Promise.resolve(firstJson)
        .then((result: any)=>{
            console.log('Successful, in console',result);
            res.status(200).json(firstJson);
        })
        .catch((err: any)=>{
            console.log('Huy man, error', err);
            res.status(400).json({answer:'Bursted'});
        });
    }
    protected static async getInfo2(req:Request, res:Response): Promise<any>{
        const secondJson ={Author: 'Brian', assignment: 'TWO'};

        Promise.resolve(secondJson)
        .then((result: any)=>{
            console.log('Successful, in console',result);
            res.status(200).json(secondJson);
        })
        .catch((err: any)=>{
            console.log('Huy man, error', err);
            res.status(400).json({answer:'Bursted'});
        });
    }
    protected static async getInfo3(req:Request, res:Response): Promise<any>{
        const thirdJson ={Author: 'Brian', assignment: 'THREE'};

        Promise.resolve(thirdJson)
        .then((result: any)=>{
            console.log('Successful, in console',result);
            res.status(200).json(thirdJson);
        })
        .catch((err: any)=>{
            console.log('Huy man, error', err);
            res.status(400).json({answer:'Bursted'});
        });
    }
}

export default TestDAO;