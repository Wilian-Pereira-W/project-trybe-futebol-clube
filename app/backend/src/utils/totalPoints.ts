import IhomeMatche from "../interface/homeMatche";
const totalPoints = (homeMatche: IhomeMatche[]) => {
  let pontos = 0;
  homeMatche.map((gol) => {
    if(gol.homeTeamGoals > gol.awayTeamGoals) {
      pontos += 3;
    } else if(gol.homeTeamGoals === gol.awayTeamGoals){
      pontos += 1;
    } else {
      pontos += 0;
    }
  });
  return pontos;
}

export default totalPoints;