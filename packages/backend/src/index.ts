import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import fs from 'fs';
import path from 'path';

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT as string);

app.use(express.json())
app.use(helmet())

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200)
});

app.get("/api/contacts", (req: Request, res: Response) => {
  const contacts = fs.readFileSync(path.resolve(__dirname, './very_elaborate_database.txt'), 'utf8')

  res.status(200).json(JSON.parse(contacts))
})

app.post("/api/contacts", (req: Request, res: Response) => {
  const contacts = fs.readFileSync(path.resolve(__dirname, './very_elaborate_database.txt'), 'utf8')

  res.status(200).send(req.body)
})

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port} 🚀`);
});
