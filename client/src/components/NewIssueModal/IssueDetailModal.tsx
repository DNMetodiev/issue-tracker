import React from 'react';
import { Issue } from '../../models/interfaces';
import './IssueDetailModal.css';

interface IssueDetailModalProps {
  issue: Issue;
  onClose: () => void;
}

const IssueDetailModal: React.FC<IssueDetailModalProps> = ({ issue, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>×</button>
        <div className="issue-detail">
          <h1>{issue.title}</h1>
          <p>{issue.description}</p>
          <p>Posted by User123 on January 1st, 2022</p>
          <button className="modal-detail-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailModal;
