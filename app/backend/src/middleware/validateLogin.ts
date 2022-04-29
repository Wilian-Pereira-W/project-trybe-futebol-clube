import { Request, Response, NextFunction } from 'express';

class ValidateLogin {
  static validateEmail(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const emailFormat = /\S+@\S+\.\S+/;
    const isValid = emailFormat.test(email);

    if (!email) {
      res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!isValid) {
      res.status(401).json({ message: 'Incorrect email or password' });
    }
    next();
  }

  static validatePassword(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;

    if (!password) {
      res.status(400).json({ message: 'All fields must be filled' });
    }

    if (password.length <= 6) {
      res.status(401).json({ message: 'Incorrect email or password' });
    }
    next();
  }
}

export default ValidateLogin;
