import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


export class clients {

   async createClient(req: Request, res: Response):Promise<result>{
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
    const {codCliente} = req.body;
    const response = await prismaClient.client.findUnique({
      where: { id: codCliente}
    });

    const clientObjResponse = {
      payload:{
        name: response?.name,
        balance: response?.balance
      }
    }

    return res.status(201).json(clientObjResponse);
  }

  async depositCash(req: Request, res: Response){
    const {codCliente, Valor} = req.body;

    const {name, balance} = await prismaClient.client.update({
      where: { id: codCliente},
      data: { balance: {increment: Valor}},
    })
    
    const depositObjResponse = {
      payload: {
        message: 'Deposit made Successfully',
        name,
        newBalance: balance
      }
    }

    return res.status(201).json(depositObjResponse)
  }

  async withdrawCash(req: Request, res: Response){
    const {codCliente, Valor} = req.body;
    const {name, balance}= await prismaClient.client.update({
      where: { id: codCliente},
      data: { balance: {decrement: Valor}},
    })
    
    const withdrawObjResponse = {
      payload: {  
        message: 'Withdraw made Successfully',
        name,
        newBalance: balance
      }
    }
    return res.status(201).json(withdrawObjResponse)
  }
}