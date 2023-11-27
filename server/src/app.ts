import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Issue, { IIssue } from './models/Issue';
const app: Application = express();
const PORT: number | string = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.post('/api/issues', async (req: Request, res: Response) => {
  const issue = new Issue(req.body);
  try {
    const newIssue = await issue.save();
    res.status(201).json(newIssue);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

app.get('/api/issues', async (req: Request, res: Response) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

app.delete('/api/issues/:id', async (req: Request, res: Response) => {
  try {
    const result = await Issue.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.json({ message: 'Issue deleted' });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

app.patch('/api/issues/:id', async (req: Request, res: Response) => {
  try {
    const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.json(issue);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});