import { Request, Response } from 'express';
import LeaderboardServices from '../services/leaderboardServices';

class LeaderboardController {
  static async findAllLeaderboardsHome(_req: Request, res: Response) {
    try {
      const leaderboards = await LeaderboardServices.findAllLeaderboardsHome();
      return res.status(200).json(leaderboards);
    } catch (error) {
      console.log(error);
    }
  }
}

export default LeaderboardController;
