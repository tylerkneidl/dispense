import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT as string);

app.use(express.json())
app.use(helmet())

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200)
});

app.get("/api/contacts", (req: Request, res: Response) => {
  console.log(req.body)
  res.sendStatus(200).send(req.body)
})

app.post("/api/contacts", (req: Request, res: Response) => {
  console.log(req)
})

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port} 🚀`);
});
