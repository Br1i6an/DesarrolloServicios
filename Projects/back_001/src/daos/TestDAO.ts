import {Response, Request} from 'express';

class TestDAO{

    protected static async getInfo(req:Request, res:Response): Promise<any>{
        const myJson ={teachers: 'Harvey & Andres', assignment: 'TWO'};

        Promise.resolve(myJson)
        .then((result: any)=>{
            console.log('Huyyyyyy the console !!!',result);
            res.status(200).json(myJson);
        })
        .catch((err: any)=>{
            console.log('Huy man, error', err);
            res.status(400).json({answer:'This shit bursted'});
        });
    }
}
export default TestDAO;