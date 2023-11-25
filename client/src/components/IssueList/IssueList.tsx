import React, { useState } from 'react';
import { Issue } from '../../models/interfaces';
import { dummyIssues } from '../../models/issues';
import './HomePage.css';
import IssueDetailModal from '../NewIssueModal/IssueDetailModal';

const IssueList: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleReadMore = (issue: Issue) => {
    setSelectedIssue(issue);
    toggleModal();
  };

  return (
    <div className="issue-list-container">
      {dummyIssues.length > 0 ? (
        <div className="issue-grid">
          {dummyIssues.map(issue => (
            <div key={issue.id} className="issue-box" onClick={() => handleReadMore(issue)}>
              <h3>{issue.title}</h3>
              <div className="description">
                {issue.description.substring(0, 100)}
                {issue.description.length > 100 && (
                  <span className="read-more">... read more</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-issues">No issues found. Would you like to create one?</div>
      )}
      {modalOpen && selectedIssue && (
        <IssueDetailModal issue={selectedIssue} onClose={toggleModal} />
      )}
    </div>
  );
};

export default IssueList;