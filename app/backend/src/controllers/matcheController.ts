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

  static async createMatches(req: Request, res: Response) {
    const {homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress} = req.body;
    try {
      if(homeTeam === awayTeam) {
        return res.status(401).json({ message: 'It is not possible to create a match with two equal teams'} );
      }
      const thereIsTeam = await MatchServices.thereIsTheTeam(homeTeam, awayTeam);
      if(thereIsTeam) {
        return res.status(404).json({ message: 'There is no team with such id!'} );
      }
      const newMatch = await MatchServices.createMatches(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress);
      return res.status(201).json(newMatch);
    } catch (error) {
      
    }
  }
}

export default MatcheController;
