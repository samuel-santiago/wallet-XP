import { Router } from 'express';
import clientsRoute from './clients';
import contaRoute from './conta';
import ativosRoute from './ativos';
import investimentosRoute from './investimentos';

const router = Router();

router.use('/clients', clientsRoute);

router.use('/conta', contaRoute);

router.use('/ativos', ativosRoute);

router.use('/investimentos', investimentosRoute);

export {router};
