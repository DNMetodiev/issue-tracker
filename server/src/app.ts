import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Issue from './models/Issue';

const app: Application = express();
const PORT: number | string = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.post('/api/issues', async (req, res) => {
  const issue = new Issue(req.body);
  try {
    const newIssue = await issue.save();
    res.status(201).json(newIssue);
  } catch (err: any) {
    if (err.code === 11000) {
      console.error("Duplicate caseId error:", err);
      res.status(400).json({ message: 'Duplicate caseId error.' });
    } else {
      console.error("Error in POST /api/issues:", err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});


app.get('/api/issues', async (req: Request, res: Response) => {
  const { status, page = '1', limit = '5' } = req.query;
  const pageNum = parseInt(page as string);
  const limitNum = parseInt(limit as string);
  const statusQuery = status === 'historical' ? 'Closed' : 'Open';

  try {
    const totalItems = await Issue.countDocuments({ status: statusQuery });
    const issues = await Issue.find({ status: statusQuery })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum)
      .exec();

    res.json({
      issues,
      totalPages: Math.ceil(totalItems / limitNum),
      currentPage: pageNum
    });
  } catch (err) {
    console.error("Error in GET /api/issues:", err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/api/issues/:id', async (req: Request, res: Response) => {
  try {
    const result = await Issue.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.json({ message: 'Issue deleted' });
  } catch (err) {
    console.error("Error in DELETE /api/issues/:id:", err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.patch('/api/issues/:id', async (req: Request, res: Response) => {
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedIssue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.json(updatedIssue);
  } catch (err) {
    console.error("Error in PATCH /api/issues/:id:", err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Centralized error handler:", err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
