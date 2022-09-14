import { IUser } from '../interfaces/users';
import userModel from '../models/users';

const newUser = async (user: IUser) => {
  const { username, classe, level, password } = user;
  const result = await userModel.newUser(username, classe, level, password);
  return result;
};

export default {
  newUser,
};