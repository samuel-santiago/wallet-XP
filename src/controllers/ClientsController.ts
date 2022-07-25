import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import * as services from '../services';

export class ClientsController {

   async createClient(req: Request, res: Response){
    const {name, email, password, balance } = req.body;
    const insertedClientObj = await prismaClient.client.create({
      data: {
        name,
        email,
        password,
        balance
      },
    });
    return res.json(insertedClientObj);
  }

  async deleteById(req: Request, res: Response){
    const {email: _email} = req.body;
    const {id, name, email} = await prismaClient.client.delete({
      where:{
        email: _email
      }
    });

    const deletedObjResponse = {
      payload:{
        deletedClient: {id, name, email}
      }
    }

    return res.status(201).json(deletedObjResponse);
  }

  async getClientByCode(req: Request, res: Response){
    const {code} = req.params
    const responseObj = await services.Clients.getClientByCode(code);
    return res.status(201).json(responseObj);
  }

  async depositCash(req: Request, res: Response){
    const responseoBj = await services.Clients.depositCash(req.body)
    return res.status(201).json(responseoBj)
  }

  async withdrawCash(req: Request, res: Response){
    const responseObj = await services.Clients.withDrawCash(req.body)
    
    
    return res.status(201).json(responseObj)
  }
}