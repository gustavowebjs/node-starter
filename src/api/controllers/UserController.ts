import { Request, Response } from 'express';
import { UsersServices } from '../../services/UsersServices';

class UserController {
  async storeUser(req: Request, res: Response) {
    try {
      const Service = new UsersServices();
      const {
        username, email, password, active,
      } = req.body;

      const user = await Service.store({
        username, email, password, active,
      });

      return res.json(user);
    } catch (error) {
      res.json(error);
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const Service = new UsersServices();
      // const { username } = req.body;

      const users = await Service.get();

      res.json(users);
    } catch (error) {
      res.json(error);
    }
  }
}

export { UserController };
