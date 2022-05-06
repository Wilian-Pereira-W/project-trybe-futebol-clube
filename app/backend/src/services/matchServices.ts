import { ParsedQs } from 'qs';
import TeamModel from '../database/models/Team';
import MatchModel from '../database/models/Matche';
import IdadosPartidas from '../interface/partidas';

class MatchServices {
  static async findAllMatches(inProgress: string | string[] | ParsedQs | ParsedQs[] | undefined) {
    if (inProgress === undefined) {
      const matches = await MatchModel.findAll({
        include: [
          { model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
        ],
      });
      return matches;
    }
    if (inProgress === 'false' || inProgress === 'true') {
      const boolean = inProgress === 'true';
      const matches = await MatchModel.findAll({
        include: [{ model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
        ],
        where: { inProgress: boolean } });
      return matches;
    }
  }

  static async createMatches(payload: IdadosPartidas) {
    const newMatch = await MatchModel
      .create(payload);
    return newMatch;
  }

  static async thereIsTheTeam(homeTeam: number, awayTeam: number) {
    const thereIsHomeTeam = await TeamModel.findByPk(homeTeam);
    const thereIsAwayTeam = await TeamModel.findByPk(awayTeam);
    if (thereIsHomeTeam === null || thereIsAwayTeam === null) {
      return true;
    }
  }

  static async finishedMatches(id: string) {
    await MatchModel.update(
      { inProgress: false },
      { where: { id } },
    );
  }

  static async updateScore(id: string, homeTeamGoals: string, awayTeamGoals: string) {
    await MatchModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  }
}

export default MatchServices;
