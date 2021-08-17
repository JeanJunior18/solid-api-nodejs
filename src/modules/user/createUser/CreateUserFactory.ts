import { InMemoryUserRepository } from '../../../repositories/inMemory';
import { CreateUserController } from './CreateUserController';
import { CreateUserService } from './CreateUserService';

export const CreateUserFactory = (): CreateUserController => {
  const userRepository = new InMemoryUserRepository();
  const createUser = new CreateUserService(userRepository);
  const createUserController = new CreateUserController(createUser);
  return createUserController;
};
