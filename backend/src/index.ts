import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT as string);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port} 🚀`);
});