import { NextFunction, Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
  constructor(private createUser: CreateUserService) {
    this.handle = this.handle.bind(this);
  }

  async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { name, email, username } = req.body;
      const user = await this.createUser.execute({ name, email, username });

      return res.status(201).json(user);
    } catch (err) {
      return next(err);
    }
  }
}
