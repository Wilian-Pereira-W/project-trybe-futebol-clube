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
}

export default TeamController;
