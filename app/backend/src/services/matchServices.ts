import TeamModel from "../database/models/Team";
import MatchModel from "../database/models/Matche";

class MatchServices {
  static async findAllMatches() {
    const matches = await MatchModel.findAll({
      include: [
        {model: TeamModel, as: 'teamHome'},
        {model: TeamModel, as: 'teamAway'}
      ]
    });
    console.log('matchesss', matches);
    return matches;
  }
};

export default MatchServices;
