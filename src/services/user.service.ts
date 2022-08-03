import userModel from '../models/user.models';
import { User } from '../interfaces/interface';

const userService = {
  async createUser(data: User): Promise<User> {
    const result = await userModel.createUser(data);
    return result;
  },
};

export default userService;