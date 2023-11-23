import React, { useState } from 'react';
import { Issue } from '../../models/interfaces';
import { dummyIssues } from '../../models/issues';
import NewIssueModal from '../NewIssueModal/NewIssueModal';
import './HomePage.css';

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
            <div key={issue.id} className="issue-box">
              <h3>{issue.title}</h3>
              <div className="description">
                {issue.description.length > 100 ? (
                  <>
                    {issue.description.substring(0, 97)}...
                    <span className="read-more" onClick={() => handleReadMore(issue)}>read more</span>
                  </>
                ) : (
                  issue.description
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-issues">No issues found. Would you like to create one?</div>
      )}
      {modalOpen && selectedIssue && <NewIssueModal issue={selectedIssue} onClose={toggleModal} />}
    </div>
  );
};

export default IssueList;