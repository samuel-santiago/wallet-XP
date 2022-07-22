import Express, { Request, Response } from "express";
import { clients } from "../controllers/ClientsController";

const router = Express();

const clientsController = new clients();

router.get('/', clientsController.getClientByCode);

router.route('/deposito')
  .post(clientsController.depositCash);

router.route('/saque')
  .post(clientsController.withdrawCash);

export default router;


// TESTE REQUISIÇÃO
// {
//   "codCliente": "151efccd-16f7-4482-b9ea-e5f97bebe025",
//   "Valor": 999
// }

