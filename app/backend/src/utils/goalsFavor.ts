import IhomeMatche from '../interface/homeMatche';

const goalsFavor = (homeMatche: IhomeMatche[]) => {
  let golFeitos = 0;
  homeMatche.forEach((gol) => { golFeitos += gol.homeTeamGoals; });
  return golFeitos;
};

export default goalsFavor;
