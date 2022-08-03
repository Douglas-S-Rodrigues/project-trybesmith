import { ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces/interface';
import connection from './connection';

const userModel = {
  async createUser(data: User): Promise<User> {
    const { username, classe, level, password } = data;
    const sql = `
    INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)`;
    const user = await connection
      .query<ResultSetHeader>(sql, [username, classe, level, password]);
    const [{ insertId }] = user;
    return { id: insertId, ...data };
  },
};

export default userModel;