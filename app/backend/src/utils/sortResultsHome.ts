import IhomeResults from '../interface/homeResults';

const sortResultsHome = (a: IhomeResults, b: IhomeResults) => {
  if (b.totalPoints > a.totalPoints) { return 1; }
  if (b.totalPoints < a.totalPoints) { return -1; }
  if (b.goalsBalance > a.goalsBalance) { return 1; }
  if (b.goalsBalance < a.goalsBalance) { return -1; }
  if (b.goalsFavor > a.goalsFavor) { return 1; }
  if (b.goalsFavor < a.goalsFavor) { return -1; }
  if (b.goalsOwn > a.goalsOwn) { return 1; }
  if (b.goalsOwn < a.goalsOwn) { return -1; }
  return 0;
};

export default sortResultsHome;
