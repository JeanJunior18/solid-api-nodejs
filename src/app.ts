import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './router';

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.router();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  router() {
    this.app.use(router);
    this.app.use((req: Request, res: Response) => {
      return res.status(404).json({ error: 'Path Not Found' });
    });
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500);
        next(err.message);
        res.json({ error: err.message });
      },
    );
  }
}

export default new App().app;
