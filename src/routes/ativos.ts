import Express, { Request, Response } from "express";
import { clients } from "../controllers/ClientsController";

const router = Express();


router.route('/')
  .get((req: Request, res: Response) => res.status(200).json({message: 'passou no ativos'}))
  

export default router;