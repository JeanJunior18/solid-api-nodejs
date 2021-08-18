import { User } from '../entities/User';

export interface IUserRepositories {
  create(user: User): Promise<User>;
  list(query?: { teams: string[] }): Promise<User[]>;
  exists(username: string): Promise<boolean>;
}
