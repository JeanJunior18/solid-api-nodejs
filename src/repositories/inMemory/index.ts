import { User } from '../../entities/User';
import { IUserRepositories } from '../IUserRepositories';
import { v4 as uuid } from 'uuid';

export class InMemoryUserRepository implements IUserRepositories {
  private users: User[] = [];

  async create(user: Omit<User, 'id'>): Promise<User> {
    Object.assign(user, {
      id: uuid(),
    });
    this.users.push(user);
    return user;
  }

  async exists(username: string): Promise<boolean> {
    return this.users.some((user) => user.username === username);
  }

  async list(query?: { teams: string[] }): Promise<User[]> {
    if (!query) return this.users;
    return this.users.filter((user) => {
      return user.teams.some((team) => query.teams.includes(team));
    });
  }
}
