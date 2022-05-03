import TeamModel from '../database/models/Team';

class TeamServices {
  static async findAllTeams () {
    const teams = await TeamModel.findAll();
    return teams;
  }
}

export default TeamServices;
