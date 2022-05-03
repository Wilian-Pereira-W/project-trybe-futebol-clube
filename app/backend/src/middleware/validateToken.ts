import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { readFile } from 'fs/promises';

const getSecret = async () => readFile('jwt.evaluation.key', 'utf-8');

class ValidateToken {
  static async authorizationToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Token not found' });
    }

    try {
      const secret = await getSecret();

      const decoded = jwt.verify(token, secret);
      req.body.token = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
}

export default ValidateToken;
