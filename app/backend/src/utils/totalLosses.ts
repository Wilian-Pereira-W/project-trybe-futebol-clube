import IhomeMatche from '../interface/homeMatche';

const totalLosses = (homeMatche: IhomeMatche[]) => {
  let derrota = 0;
  homeMatche.forEach((gol) => {
    if (gol.homeTeamGoals < gol.awayTeamGoals) {
      derrota += 1;
    }
  });
  return derrota;
};

export default totalLosses;
