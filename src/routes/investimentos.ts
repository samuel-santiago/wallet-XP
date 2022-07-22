import Express from "express";
import { clients } from "../controllers/ClientsController";

const router = Express();

const createNewClient = new clients();

router.route('/investimentos')

export default router;