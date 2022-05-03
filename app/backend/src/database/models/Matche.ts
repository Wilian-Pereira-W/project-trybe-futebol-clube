import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './Team';

class Matche extends Model {
  id!: number;

  homeTeam!: number;

  homeTeamGoals!: number;

  awayTeam!: number;

  awayTeamGoals!: number;

  inProgress!: boolean;
}

Matche.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
    field: 'home_team',
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
    field: 'home_team_goals',
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
    field: 'away_team',
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
    field: 'away_team_goals',
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
    field: 'in_progress',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matche.belongsTo(Team, {foreignKey: 'homeTeam', as: 'teamHome'});
Matche.belongsTo(Team, {foreignKey: 'awayTeam', as: 'teamAway'});

Team.hasMany(Matche, {foreignKey: 'homeTeam', as: 'homeMatche'});
Team.hasMany(Matche, {foreignKey: 'awayTeam', as: 'awayMatche'});

export default Matche;
