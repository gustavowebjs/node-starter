import { Request, Response } from 'express';
import User from '../../entity/User';

export const storeUser = async (req: Request, res: Response) => {
  try {
    const {
      username, email, password, isActive,
    } = req.body;

    const user = new User(username, email, password, isActive);

    // persist database
    await user.save();

    return res.json(user);
  } catch (error) {
    res.json(error);
  }
};

export const getUsers = async (req:Request, res: Response) => {
  try {
    // const { username } = req.body;

    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.json(error);
  }
};
