import { InMemoryUserRepository } from './index';

describe('In memory repository', () => {
  const memoryRepository = new InMemoryUserRepository();

  it('should be create a user', async () => {
    const user = await memoryRepository.create({
      name: 'Jest Test',
      email: 'jest@test.com',
      username: 'testjest',
      teams: ['team1', 'team2'],
    });

    expect(user).toHaveProperty('id');
  });

  it('should be find a user', async () => {
    const user = {
      name: 'Jest Exist Test',
      email: 'exist@test.com',
      username: 'testexist',
      teams: ['team1', 'team2'],
    };

    await memoryRepository.create(user);
    const isRegistered = await memoryRepository.exists(user.username);
    const isNotRegistered = await memoryRepository.exists('testnotexists');

    expect(isRegistered).toBeTruthy();
    expect(isNotRegistered).toBeFalsy();
  });

  it('should be list users', async () => {
    const user = {
      name: 'Jest Query Test',
      email: 'exist@test.com',
      username: 'testexist',
      teams: ['querytest'],
    };

    await memoryRepository.create(user);

    const users = await memoryRepository.list();
    const usersFiltered = await memoryRepository.list({ teams: ['querytest'] });

    expect(usersFiltered).toHaveLength(1);
    expect(Array.isArray(users)).toBeTruthy();
  });
});
