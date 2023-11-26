import dotenv from 'dotenv';

dotenv.config();

import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app: Application = express();
const PORT: number | string = process.env.PORT || 5000;
const MONGO_URI: string = process.env.MONGO_URI || 'your_default_mongodb_uri';

app.use(cors());
app.use(express.json());



mongoose.connect(MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express Server!' });
});


app.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});