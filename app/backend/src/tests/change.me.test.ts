import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as jwt from 'jsonwebtoken';

import { app } from '../app';

import { Response } from 'superagent';
import  User from '../database/models/User';
import Team from '../database/models/Team';
import userMock from './mock/user';
import teamMock from './mock/team';
import teamsMock from './mock/teams'

chai.use(chaiHttp);

const { expect } = chai;


describe('Post /login', () => {

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(userMock as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  });
  describe('Quando não é passado o email e a senha', () => {
    let response: Response;
    before( async () => {
      response = await chai.request(app).post('/login').send({});
    });
    it('retorna código de status 400', () => {
      expect(response).to.have.status(400);
    });
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    it('objeto de resposta possui a proprieade "message"', () => {
      expect(response.body.message).to.be.equals('All fields must be filled');
    })
  });
  describe('Quando passado um email ou password incorreto', () => {
    let response: Response;
    before( async () => {
      response = await chai.request(app).post('/login').send({email: 'test.test.com', password: 1234});
    });
    it('retorna código de status 401', () => {
      expect(response).to.have.status(401);
    });
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    it('objeto de resposta possui a proprieade "message"', () => {
      expect(response.body.message).to.be.equals('Incorrect email or password');
    })
  });

  describe('Quando login é feito com sucesso', () => {
    let response: Response;
    before( async () => {
      response = await chai.request(app).post('/login').send({ email: 'admin@admin.com',
      password: 'secret_admin', });
    });
    it('retorna código de status 200', () => {
      expect(response).to.have.status(200);
    });
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    it('objeto de resposta possui a propriedade "user"', () => {
      expect(response.body.user.username).to.be.equals('Admin');
      expect(response.body.user.role).to.be.equals('admin');
      expect(response.body.user.email).to.be.equals('admin@admin.com');
    });
    // it('objeto de resposta possui a propriedade "token"', () => {
    //   const { token } = response.body;
    //   const payload = jwt.decode(token);
    //   expect(payload).to.be.equals('admin')
    //   console.log(payload);
    // });
    it('objeto de resposta possui a propriedade "token"', () => {
      expect(response.body).to.be.property('token');
    });
  });


});

describe('Get /teams/:id', () => {
  before(async () => {
    sinon
      .stub(Team, "findByPk")
      .resolves(teamMock as Team);
  });

  after(()=>{
    (Team.findByPk as sinon.SinonStub).restore();
  });
  describe('Quando passa o id do time', () => {
    let response: Response;
    before( async () => {
      response = await chai.request(app).get('/teams/1').send();
    });
    it('retorna código de status 200', () => {
      expect(response).to.have.status(200);
    });
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    it('retorna o time Avaí/Kindermann', () => {
      expect(response.body.teamName).to.be.equals('Avaí/Kindermann');
    });
  });
});

describe('Get /teams', () => {
  before(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(teamsMock as Team[]);
  });

  after(()=>{
    (Team.findAll as sinon.SinonStub).restore();
  });
  describe('Quando passa o id do time', () => {
    let response: Response;
    before( async () => {
      response = await chai.request(app).get('/teams').send();
    });
    it('retorna código de status 200', () => {
      expect(response).to.have.status(200);
    });
    it('retorna um array no body', () => {
      expect(response.body).to.be.an('array');
    });
  });
});