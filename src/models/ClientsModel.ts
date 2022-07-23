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

}