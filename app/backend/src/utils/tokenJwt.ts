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

export default {
  createToken,
};
