import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/errorHandler';
import todoRouter from './routes/todo.routes';

dotenv.config();

const app = express();
app.use(bodyParser.json());
//Routes
app.use('/api/todo',todoRouter);
app.use(errorHandler);

export default app;
