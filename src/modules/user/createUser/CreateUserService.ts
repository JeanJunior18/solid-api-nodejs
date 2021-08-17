import { User } from '../../../entities/User';
import { IUserRepositories } from '../../../repositories/IUserRepositories';

class CreateUserService {
  constructor(private userRepositories: IUserRepositories) {}

  async execute({ name, username, email }: User): Promise<User> {
    const userAlreadyExists = await this.userRepositories.exists(username);

    if (userAlreadyExists) throw new Error('User already exists');

    const userCreate = User.create({ name, username, email });
    const user = await this.userRepositories.create(userCreate);
    return user;
  }
}

export { CreateUserService };
