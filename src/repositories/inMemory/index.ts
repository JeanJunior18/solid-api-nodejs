import { User } from '../../entities/User';
import { IUserRepositories } from '../IUserRepositories';
import crypto from 'crypto';

export class InMemoryUserRepositorie implements IUserRepositories {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: crypto.randomBytes(16).toString('hex'),
    });
    this.users.push(user);
    return user;
  }

  async exists(username: string): Promise<boolean> {
    return this.users.some((user) => user.username === username);
  }
}
