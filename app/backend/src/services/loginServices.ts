import UserModel from '../database/models/User';
import tokenJwt from '../utils/tokenJwt';
import Iuser from '../interface/user';

class LoginServices {
  static async findOneUser(email: string) {
    const user = await UserModel.findOne({
      where: {
        email,
      },
    }) as Iuser || null;

    const token = await tokenJwt.createToken({ id: user.id, username: user.username });
    return {
      user:
      { id: user.id, username: user.username, role: user.role, email: user.email },
      token,
    };
  }
}

export default LoginServices;
