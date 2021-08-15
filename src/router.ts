import { Router } from 'express';
import { CreateUserFactory } from './modules/createUser/CreateUserFactory';

const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

router.post('/user', CreateUserFactory().handle);

export default router;
