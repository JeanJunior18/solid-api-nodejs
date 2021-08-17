import { Router } from 'express';
import { CreateUserFactory } from './modules/user/createUser/CreateUserFactory';

const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

router.get('/error', () => {
  throw new Error('Error Test Response');
});

router.post('/user', CreateUserFactory().handle);

export default router;
