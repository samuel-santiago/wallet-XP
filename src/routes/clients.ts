import Express from "express";
import { clients } from "../controllers/ClientsController";

const router = Express();

const clientsController = new clients();

router.route('/')
 .post(clientsController.createClient)
 .delete(clientsController.deleteById);



export default router;


// TESTE REQUISIÇÃO
// {
//   "name": "Samantha",
//   "email": "teste@teste2.com.br",
//   "password": "40000",
//   "balance": 40000
// }