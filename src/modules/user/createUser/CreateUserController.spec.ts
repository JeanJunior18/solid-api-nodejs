import app from '../../../app';
import supertest from 'supertest';

describe('Create User Controller', () => {
  const request = supertest(app);
  it('Should be create a new user', async () => {
    const userTest = {
      username: 'testController',
      name: 'testController',
      email: 'controller@jest.com',
    };

    const response = await request.post('/user').send(userTest);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
