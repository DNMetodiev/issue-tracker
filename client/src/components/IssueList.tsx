import React from 'react';
import { Link } from 'react-router-dom';

interface Issue {
  id: string;
  title: string;
  description: string;
  status: string;
}

// Dummy data for the issues list
const issues: Issue[] = [
  {
    id: '1',
    title: 'Issue One',
    description: 'This is the first issue',
    status: 'Open'
  },
];

const IssueList: React.FC = () => {
  return (
    <div>
      <h1>Issue Tracker</h1>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <Link to={`/issue/${issue.id}`}>{issue.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/new-issue">Create a New Issue</Link>
    </div>
  );
};

export default IssueList;
