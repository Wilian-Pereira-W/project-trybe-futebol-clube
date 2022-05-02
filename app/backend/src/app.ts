import * as express from 'express';
import * as cors from 'cors';
import validateLogin from './middleware/validateLogin';
import LoginController from './controllers/loginController';

class App {
  public app: express.Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    this.router();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());
    // ...
  }

  private router(): void {
    this.app.get('/test', (_req, res) => res.status(200).json({ message: 'foi' }));
    this.app.post(
      '/login',
      validateLogin.validateEmail,
      validateLogin.validatePassword,
      LoginController.login,
    );
    this.app.get('/vai', (_req, res) => res.status(200).json({ message: 'vai' }));
  }

  // ...
  public start(PORT: string | number):void {
    // ...
    this.app.listen(PORT, () => {
      console.log(`Execultado na porta: ${PORT}`);
    });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
