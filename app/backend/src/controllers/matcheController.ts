import { Request, Response } from 'express';
import MatchServices from '../services/matchServices';

class MatcheController {
  static async findAllMatches(req: Request, res: Response){
    const {inProgress} = req.query;
    try {
      const matches = await MatchServices.findAllMatches(inProgress);
      return res.status(200).json(matches);
    } catch (error) {
      console.log(error);
    }
  }
}

export default MatcheController;
