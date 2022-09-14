import { Request, Response } from 'express';
import { IUser } from '../interfaces/users';
import userService from '../services/users';

const newUser = async (req: Request<unknown, unknown, IUser>, res: Response) => {
  const result = await userService.newUser(req.body);
  return res.status(201).json(result);
};

export default {
  newUser,
};