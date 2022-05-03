import TeamModel from "../database/models/Team";
import MatchModel from "../database/models/Matche";
import { where } from "sequelize/types";

class MatchServices {
  static async findAllMatches(inProgress: any) {
    if(inProgress === undefined){
      const matches = await MatchModel.findAll({
        include: [
          {model: TeamModel, as: 'teamHome', attributes: {exclude: ['id']}},
          {model: TeamModel, as: 'teamAway', attributes: {exclude: ['id']}}
        ]
      });
      return matches;
    }
    if(inProgress === 'false' || inProgress === 'true') {
      const boolean = inProgress === "true";
      const matches = await MatchModel.findAll({
        include: [
          {model: TeamModel, as: 'teamHome', attributes: {exclude: ['id']}},
          {model: TeamModel, as: 'teamAway', attributes: {exclude: ['id']}}
        ],
        where: {
          inProgress: boolean,
        }
      });
      return matches;
    }
   
  }

  static async createMatches(homeTeam: number, awayTeam: number, homeTeamGoals: number, awayTeamGoals: number, inProgress: boolean) {
    const newMatch = await MatchModel.create({homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress});
    return newMatch;
  }
};

export default MatchServices;
