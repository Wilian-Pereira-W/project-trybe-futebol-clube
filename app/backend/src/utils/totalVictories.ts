import IhomeMatche from '../interface/homeMatche';

const totalVictories = (homeMatche: IhomeMatche[]) => {
  let vitoria = 0;
  homeMatche.forEach((gol) => {
    if (gol.homeTeamGoals > gol.awayTeamGoals) {
      vitoria += 1;
    }
  });
  return vitoria;
};

export default totalVictories;
