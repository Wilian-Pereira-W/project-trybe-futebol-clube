import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';

class Matche extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  inProgress!: boolean;
}

Matche.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
    field: 'home_team'
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
    field: 'home_team_goals'
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
    field: 'away_team'
  },
  awayTeamGols: {
    allowNull: false,
    type: INTEGER,
    field: 'away_team_goals'
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
    field: 'in_progress'
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default Matche;