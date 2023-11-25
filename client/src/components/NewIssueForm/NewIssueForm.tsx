import React, { useState } from 'react';
import { Issue } from '../../models/interfaces';
import './NewIssueForm.css';

type NewIssueFormProps = {
  onCreate: (issue: Issue) => void;
};

const NewIssueForm: React.FC<NewIssueFormProps> = ({ onCreate }) => {
  const [caseId, setCaseId] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newIssue: Issue = {
      id: Math.random().toString(36).substring(2, 9),
      caseId: caseId,
      title: `Issue #${caseId}`,
      description: description,
      status: 'Open'
    };

    console.log('Creating issue:', newIssue);
    onCreate(newIssue);
    setCaseId('');
    setDescription('');
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
            onChange={e => setCaseId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Initial Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="create-button">Create</button>
      </form>
    </div>
  );
};

export default NewIssueForm;