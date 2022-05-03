import * as jwt from 'jsonwebtoken';
import { readFile } from 'fs/promises';

const getSecret = async () => readFile('jwt.evaluation.key', 'utf-8');

const createToken = async (
  payload: {
    id: number,
    role: string,
  },
) => {
  const jwtConfig = {
    expiresIn: '5d',
  };

  const secret = await getSecret();

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

const validateToken = async (token: string) => {
  try {
    const secret = await getSecret();

    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    console.log(error);
  }
};

export default {
  createToken,
  validateToken,
};
