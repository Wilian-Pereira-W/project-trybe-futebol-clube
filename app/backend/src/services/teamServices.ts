import TeamModel from '../database/models/Team';

class TeamServices {
  static async findAllTeams() {
    const teams = await TeamModel.findAll();
    return teams;
  }

  static async findByPkTeam(id: string) {
    const team = await TeamModel.findByPk(id);
    return team;
  }
}

export default TeamServices;
