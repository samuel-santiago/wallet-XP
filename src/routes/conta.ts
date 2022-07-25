import Express, { Request, Response } from "express";
import * as controllers from '../controllers'
import * as middlewares from '../middlewares';

const router = Express();


router.get('/:code', controllers.Clients.getClientByCode);

router.route('/deposito')
  .post(middlewares.depositAndWithDrawValidation, controllers.Clients.depositCash);

router.route('/saque')
  .post(middlewares.depositAndWithDrawValidation, controllers.Clients.withdrawCash);

export default router;


