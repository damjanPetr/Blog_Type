import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './src/routes/route';
import cors from 'cors'
dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});



app.use('api',router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

