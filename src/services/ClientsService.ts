import { Decimal } from "@prisma/client/runtime";
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

} 