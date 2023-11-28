import React, { useState, useEffect } from 'react';
import { getIssues, deleteIssue } from '../../services/issueService.js';
import IssueDetailModal from '../NewIssueModal/IssueDetailModal';
import { Issue } from '../../models/interfaces';
import './HomePage.css';

const IssueList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const fetchedIssues = await getIssues();
        setIssues(fetchedIssues);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleReadMore = (issue: Issue) => {
    setSelectedIssue(issue);
    toggleModal();
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteIssue(id);
      setIssues(issues.filter((issue) => issue.id !== id));
    } catch (error) {
      console.error('Error deleting issue:', error);
    }
  };

  return (
    <div className="issue-list-container">
      {issues.length > 0 ? (
        <div className="issue-grid">
          {issues.map((issue) => (
            <div key={issue.id} className="issue-box">
              <h3>{issue.title}</h3>
              <p className="description">{issue.description}</p>
              <button onClick={() => handleReadMore(issue)}>Read More</button>
              <button onClick={() => handleDelete(issue.id)}>Delete</button>
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