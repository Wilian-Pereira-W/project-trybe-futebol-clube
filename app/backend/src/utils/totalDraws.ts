import IhomeMatche from "../interface/homeMatche";
const totalDraws = (homeMatche: IhomeMatche[]) => {
  let empate = 0;
  homeMatche.map((gol) => {
    if(gol.homeTeamGoals === gol.awayTeamGoals) {
      empate += 1;
    }
  });
  return empate;
}

export default totalDraws;