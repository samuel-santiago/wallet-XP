import Express from "express";
import * as controllers from "../controllers";

const router = Express();


router.route('/')
 .post(controllers.Clients.createClient)
 .delete(controllers.Clients.deleteById);



export default router;


// TESTE REQUISIÇÃO
// {
//   "name": "Samantha",
//   "email": "teste@teste2.com.br",
//   "password": "40000",
//   "balance": 40000
// }