import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';

const app: Application = express();
const PORT: number | string = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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