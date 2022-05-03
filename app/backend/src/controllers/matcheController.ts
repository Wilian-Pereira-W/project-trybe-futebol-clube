import { Request, Response } from 'express';
import MatchServices from '../services/matchServices';

class MatcheController {
  static async findAllMatches(req: Request, res: Response){
    try {
      const matches = await MatchServices.findAllMatches();
      return res.status(200).json(matches);
    } catch (error) {
      console.log(error);
    }
  }
}

export default MatcheController;
