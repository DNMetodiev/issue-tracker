import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createIssue } from '../../services/issueService';
import { Issue } from '../../models/interfaces';
import './NewIssueForm.css';

interface NewIssueFormProps {
  onCreate: (issue: Issue) => void;
}

const NewIssueForm: React.FC<NewIssueFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const issueData: Issue = {
      caseId: uuidv4(),
      title,
      description,
      status: 'Open',
    };

    try {
      const newIssue = await createIssue(issueData);
      console.log('Issue created:', newIssue);
      onCreate(newIssue);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.log('not created')
    }
  };

  return (
    <div className="new-issue-form-container">
      <form onSubmit={handleSubmit} className="new-issue-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="create-button">Create Issue</button>
      </form>
    </div>
  );
};

export default NewIssueForm;
