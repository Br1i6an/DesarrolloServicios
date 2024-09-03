import { Response } from "express";
import jwt from 'jsonWebToken';


class Response_AccessDAO {
    public static async process(register: any, res: Response): Promise<any> {
        if (register != null) {
            console.log(register);
            //Let's to create the token.
            const token = jwt.sign({ id: register.codAccess, role: register.nameRole}, 'EncryptedPassword', {expiresIn: '8h'});
            return res.status(200).json({token: token});

        } else {
            return res.status(401).json({ message: 'Incorrect user. ' })
        }
    }
}

export default Response_AccessDAO;