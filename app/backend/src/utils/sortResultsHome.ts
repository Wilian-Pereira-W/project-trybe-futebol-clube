import IhomeResults from "../interface/homeResults";

const sortResultsHome = (a: IhomeResults, b: IhomeResults ) => {

  if(b.totalPoints > a.totalPoints){
    return 1
  }
  if(b.totalPoints < a.totalPoints){
    return -1
  }
  if(b.goalsBalance > a.goalsBalance){
    return 0.5
  }
  if(b.goalsBalance < a.goalsBalance){
    return -0.5
  }
  if(b.goalsFavor > a.goalsFavor){
    return 0.3
  }
  if(b.goalsFavor < a.goalsFavor){
    return -0.3
  }
  if(b.goalsOwn > a.goalsOwn){
    return 0.2
  }
  if(b.goalsOwn < a.goalsOwn){
    return -0.2
  }
  return 0
}

export default sortResultsHome;
