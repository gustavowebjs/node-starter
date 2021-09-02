import { Router } from 'express';
import { UserController } from '../api/controllers/UserController';

const routes = Router();

// controllers
const UserControler = new UserController();

routes.post('/users', UserControler.storeUser);
routes.get('/users', UserControler.getUsers);

export { routes };
