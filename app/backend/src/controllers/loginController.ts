import { Request, Response } from 'express';
import LoginServices from '../services/loginServices';

class LoginController {
  static async login(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const user = await LoginServices.findOneUser(email);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
}

export default LoginController;
