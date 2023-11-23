import React from 'react';
import { Issue } from '../../models/interfaces';
import './NewIssueModal.css';

interface NewIssueModalProps {
  issue: Issue;
  onClose: () => void;
}

const NewIssueModal: React.FC<NewIssueModalProps> = ({ issue, onClose }) => {
  // Modal implementation here
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{issue.title}</h2>
        <p>{issue.description}</p>
        {/* Add more details or actions here */}
      </div>
    </div>
  );
};

export default NewIssueModal;
