import TeamModel from '../database/models/Team';
import MatchesModel from '../database/models/Matche';
import finishedMatches from '../utils/finishedMatches';
import IhomeResults from '../interface/homeResults';
import sortResultsHome from '../utils/sortResultsHome';

class LeaderboardServices {
  static async findAllLeaderboardsHome() {
    const matches = await TeamModel.findAll({
      include: [
        { model: MatchesModel, as: 'homeMatche', where: { inProgress: false } },
      ],
    });
    const results = finishedMatches(matches);
    return results.sort((a: IhomeResults, b: IhomeResults) => sortResultsHome(a, b));
  }
}

export default LeaderboardServices;
