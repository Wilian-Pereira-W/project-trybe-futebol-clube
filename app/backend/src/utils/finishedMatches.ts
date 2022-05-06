import Team from '../database/models/Team';
import goalsFavor from './goalsFavor';
import goalsOwn from './goalsOwn';
import totalDraws from './totalDraws';
import totalLosses from './totalLosses';
import totalPoints from './totalPoints';
import totalVictories from './totalVictories';

const finishedMatches = (matches: Team[] | []) => {
  const results = matches.map((team) => ({
    name: team.teamName,
    totalGames: team.homeMatche.length,
    goalsFavor: goalsFavor(team.homeMatche),
    goalsOwn: goalsOwn(team.homeMatche),
    goalsBalance: goalsFavor(team.homeMatche) - goalsOwn(team.homeMatche),
    totalVictories: totalVictories(team.homeMatche),
    totalDraws: totalDraws(team.homeMatche),
    totalLosses: totalLosses(team.homeMatche),
    totalPoints: totalPoints(team.homeMatche),
    efficiency: parseFloat(((totalPoints(team.homeMatche)
     / (team.homeMatche.length * 3)) * 100).toFixed(2)),
  }));
  return results;
};

export default finishedMatches;
