import express from 'express';
import cors from 'cors';
import { degreeRouter } from './routes/degree';
import { employeeRouter } from './routes/employee';

export const app = express();

app.use(express.json());
app.use(cors());

app.use('/degree', degreeRouter());
app.use('/employee', employeeRouter());