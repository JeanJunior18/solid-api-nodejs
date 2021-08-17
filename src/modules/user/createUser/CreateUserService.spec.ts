import { CreateUserService } from './CreateUserService';
import { InMemoryUserRepository } from '../../../repositories/inMemory/';
import { User } from '../../../entities/User';

describe('Create User', () => {
  let userRepositoryInMemory: InMemoryUserRepository;
  let createUserService: CreateUserService;

  beforeAll(() => {
    userRepositoryInMemory = new InMemoryUserRepository();
    createUserService = new CreateUserService(userRepositoryInMemory);
  });

  it('Should create a new user', async () => {
    const userTest = {
      username: 'test',
      name: 'test',
      email: 'test@jest.com',
    };

    const user = await createUserService.execute(userTest);

    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty('id');
  });

  it('Should NOT create a new user with existent username', async () => {
    const userTest1 = {
      username: 'testDuplicate',
      name: 'testDuplicate',
      email: 'duplicated@jest.com',
    };

    const userTest2 = {
      username: 'testDuplicate',
      name: 'testDuplicate',
      email: 'duplicated@jest.com',
    };

    await createUserService.execute(userTest1);

    await expect(createUserService.execute(userTest2)).rejects.toEqual(
      new Error('User already exists'),
    );
  });
});
