import IhomeMatche from "../interface/homeMatche";
const goalsOwn = (homeMatche: IhomeMatche[]) => {
  let golSofrido = 0;
  homeMatche.map((gol) => {
    golSofrido += gol.awayTeamGoals
  });
  return golSofrido;
}

export default goalsOwn;