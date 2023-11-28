import React, { useState } from 'react';
import { createIssue } from '../../services/issueService';
import './NewIssueForm.css';

const NewIssueForm: React.FC = () => {
  const [caseId, setCaseId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const issueData = {
        caseId: caseId,
        title: title,
        description: description,
        status: 'Open',
      };
      const newIssue = await createIssue(issueData);
      console.log('Issue created:', newIssue);
      setCaseId('');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating issue:', error);
    }
  };

  return (
    <div className="new-issue-form-container">
      <form onSubmit={handleSubmit} className="new-issue-form">
        <div className="form-group">
          <label htmlFor="caseId">Case ID:</label>
          <input
            id="caseId"
            type="text"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            required
          />
        </div>
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
        <button type="submit" className="create-button">Create</button>
      </form>
    </div>
  );
};

export default NewIssueForm;