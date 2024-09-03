import { Response } from "express";
import jwt from 'jsonWebToken';


class Response_AccessDAO {
    public static async process(result: any, res: Response): Promise<any> {
        if (result != null) {
            console.log(result);
            //Let's to create the token.
            const token = jwt.sign({ name: result.userName, lastName: result.userLastname, role: result.roleName }, 'EncryptedPassword', { expiresIn: '3h' });
            
            return res.status(200).json({userName: result.userName, lastName: result.userLastname, role: result.roleName, token: token});

        } else {
            return res.status(401).json({ msg: 'Incorrect, not found.' })
        }
    }
}

export default Response_AccessDAO;