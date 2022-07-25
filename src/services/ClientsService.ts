import { Decimal } from "@prisma/client/runtime";
import StyledError from "../helpers/Error";
import * as models from '../models';

export class ClientsService {
  
  async depositCash ({codCliente, Valor}: {codCliente: string, Valor: Decimal}) {

  const {name, balance} = await models.Clients.addMoneyOnClient(codCliente, Valor)   
    
    const depositObjResponse = {
      payload: {
        message: 'Deposit made Successfully',
        name,
        newBalance: balance
      }
    }
    return depositObjResponse;
  }

  async getClientByCode (codCliente: string){
    const {payload} = await models.Clients.getClientByCode(codCliente);
    if (!(payload.balance || payload.name)) throw new StyledError(400, "Client Inexistent");
    return payload;
  }

  async withDrawCash({codCliente, Valor}: {codCliente: string, Valor: Decimal}){
    
    const {payload} = await models.Clients.getClientByCode(codCliente)
      
    if (Number(payload.balance) < Number(Valor) ) throw new StyledError(400, "Insuficient Funds")

    const {name, balance} = await models.Clients.rmvMoneyOnClient(codCliente, Valor)   

    const withdrawObjResponse = {
      payload: {  
        message: 'Withdraw made Successfully',
        name,
        newBalance: balance
      }
    }
    return withdrawObjResponse;
  }

} 

