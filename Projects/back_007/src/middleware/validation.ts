import Jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


class Validation {

    public delToken(req: Request, res: Response, next: NextFunction): any {
        if (!req.headers.authorization) {
            res.status(401).json({ msg: 'Does not Work' });
        } else {

            try {
                const myToken = req.headers.authorization.split(' ')[1] as string;
                const info = Jwt.verify(myToken, 'EncryptedPassword');
                req.body.utileData = info;
                next();
            } catch (error) {
                res.status(401).json({ msg: 'error in login' })
            }
        }
    }
}
const validation = new Validation();
export default validation;