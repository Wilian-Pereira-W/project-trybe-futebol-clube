import * as express from 'express';
import * as cors from 'cors';
import validateLogin from './middleware/validateLogin';
import validateToken from './middleware/validateToken';
import LoginController from './controllers/loginController';
import TeamController from './controllers/teamController';
import MatcheController from './controllers/matcheController';

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
    this.app.post(
      '/login',
      validateLogin.validateEmail,
      validateLogin.validatePassword,
      LoginController.login,
    );
    this.app.get('/login/validate', validateToken.authorizationToken, LoginController.getRole);

    this.app.get('/teams', TeamController.findAllTeams);
    this.app.get('/teams/:id', TeamController.findByPkTeam);

    this.app.get('/matches', MatcheController.findAllMatches);
    this.app.post('/matches', MatcheController.createMatches);
    this.app.patch('/matches/:id/finish', MatcheController.finishedMatches);
    this.app.patch('/matches/:id', MatcheController.updateScore);
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
