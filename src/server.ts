import express from 'express';
import { router } from "./routes";

const app = express();

app.use(router);

app.listen(3001, ()=> console.log(`rodando na' ${3001}`))