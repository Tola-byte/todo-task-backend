import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);
app.use('/', router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
