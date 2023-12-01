import mongoose, { Document } from 'mongoose';

export interface IIssue extends Document {
  caseId: string;
  description: string;
  status: string;
}

const issueSchema = new mongoose.Schema({
  caseId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  status: String,
});

const Issue = mongoose.model<IIssue>('Issue', issueSchema);

export default Issue;