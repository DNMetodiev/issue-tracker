import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewIssueModal from './NewIssueModal';
// import './IssueList.css';
import './HomePage.css';

// Dummy data array
const issues = [
  {
    id: '1',
    title: 'Login Issue',
    description: 'User cannot log in to the portal despite correct credentials.',
    status: 'Open'
  },
  {
    id: '2',
    title: 'Performance Issues',
    description: 'The application is running slowly on Chrome browsers on Windows.',
    status: 'In Progress'
  },
  {
    id: '3',
    title: 'Email Notifications',
    description: 'Email notifications are not being sent out to users upon task completion.',
    status: 'Resolved'
  },
  {
    id: '4',
    title: 'Data Sync Error',
    description: 'There is a discrepancy in data sync between the server and client applications.',
    status: 'Open'
  },
  {
    id: '5',
    title: 'User Profile Update',
    description: 'Updating the user profile picture results in an error on the user settings page.',
    status: 'In Review'
  },
  {
    id: '6',
    title: 'Payment Gateway Timeout',
    description: 'The payment gateway times out during transaction processing.',
    status: 'Open'
  },
  {
    id: '7',
    title: 'Mobile Responsiveness',
    description: 'The dashboard view breaks on mobile devices, particularly on iOS Safari.',
    status: 'In Progress'
  },
  {
    id: '8',
    title: 'Report Generation Failure',
    description: 'The system fails to generate reports when selecting a date range of over six months.',
    status: 'Resolved'
  },
  {
    id: '9',
    title: 'Localization Issues',
    description: 'Some text elements are not properly localized to Spanish and French.',
    status: 'Open'
  },
  {
    id: '10',
    title: 'Search Functionality Broken',
    description: 'The main search function returns incorrect results or times out.',
    status: 'Closed'
  }
];

const IssueList: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleReadMore = (issue) => {
    setSelectedIssue(issue);
    toggleModal();
  };

  return (
    <div className="homepage-container">
      {issues.length > 0 ? (
        <div className="issue-grid">
          {issues.map(issue => (
            <div key={issue.id} className="issue-box">
              <h3>{issue.title}</h3>
              <div className="description">
                {issue.description}
                {issue.description.length > 100 && (
                  <span className="read-more" onClick={() => handleReadMore(issue)}>..read more</span>
                )}
              </div>
              <Link to={`/issue/${issue.id}`} className="details-link">View Details</Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="add-new-issue">
          <p>No issues found. Would you like to create one?</p>
          <button onClick={toggleModal} className="add-new-issue-button">Add New Issue</button>
        </div>
      )}
      {modalOpen && <NewIssueModal issue={selectedIssue} onClose={toggleModal} />}
    </div>
  );
};

export default IssueList;