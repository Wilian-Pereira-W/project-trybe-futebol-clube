import { Request, Response } from 'express';
import TeamServices from '../services/teamServices';

class TeamController {
  static async findAllTeams(_req: Request, res: Response) {
    try {
      const teams = await TeamServices.findAllTeams();
      return res.status(200).json(teams);
    } catch (error) {
      console.log(error);
    }
  }
  
  static async findByPkTeam(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const team = await TeamServices.findByPkTeam(id);
      return res.status(200).json(team);
    } catch (error) {
      console.log(error);
    }
  }

}

export default TeamController;
