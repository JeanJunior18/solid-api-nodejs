import app from './app';
import supertest from 'supertest';

describe('App server test', () => {
  const request = supertest(app);

  it('should return a 200', () => {
    return request.get('/').expect(200);
  });

  it('should return a 404', () => {
    return request.get('/not-found').expect(404);
  });

  it('should return a 500', () => {
    return request.get('/error').expect(500);
  });
});
