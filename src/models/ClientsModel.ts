import { Decimal } from "@prisma/client/runtime";
import { prismaClient } from "../database/prismaClient";

export class ClientsModel {

  async addMoneyOnClient(codCliente: string, Valor:Decimal){
    
    const response = await prismaClient.client.update({
      where: { id: codCliente},
      data: { balance: {increment: Valor}},
    })

    return response;
  }

  async getClientByCode(codCliente: string){
    const response = await prismaClient.client.findUnique({
      where: { id: codCliente}
    });

    const clientObjResponse = {
      payload:{
        name: response?.name,
        balance: response?.balance
      }
    }
    return clientObjResponse;

  }

  async rmvMoneyOnClient(codCliente: string, Valor:Decimal){
    
    const response = await prismaClient.client.update({
      where: { id: codCliente},
      data: { balance: {decrement: Valor}},
    })

    return response;
  }
}