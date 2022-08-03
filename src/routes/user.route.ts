import { Router } from 'express';
import userController from '../controllers/user.controller';

const user = Router();

user.route('/')
  .post(userController.createUser);

export default user;