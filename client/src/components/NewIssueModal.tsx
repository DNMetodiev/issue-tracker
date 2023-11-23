// NewIssueModal.tsx
import React, { useState } from 'react';
import './NewIssueModal.css';

const NewIssueModal: React.FC<{ issue: Issue | null; onClose: () => void }> = ({ issue, onClose }) => {
  if (!issue) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{issue.title}</h2>
        <p>{issue.description}</p>
      </div>
    </div>
  );
};

export default NewIssueModal;