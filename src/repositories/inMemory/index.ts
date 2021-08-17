import { User } from '../../entities/User';
import { IUserRepositories } from '../IUserRepositories';
import { v4 as uuid } from 'uuid';

export class InMemoryUserRepository implements IUserRepositories {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
    });
    this.users.push(user);
    return user;
  }

  async exists(username: string): Promise<boolean> {
    return this.users.some((user) => user.username === username);
  }
}
