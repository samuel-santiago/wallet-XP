import 'express-async-errors';
import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import { router } from './routes';


const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);


app.listen(PORT, ()=> console.log(`rodando na' ${PORT}`));