import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import userService from '../services/user.service';

const secret = 'secret';

const userController = {
  async createUser(req: Request, res: Response) {
    const user = await userService.createUser(req.body);
    const token = jwt.sign({ data: user }, secret);
    return res.status(201).json({ token });
  },
};

export default userController;