import React from 'react';
import { useParams } from 'react-router-dom';

const issues: Issue[] = [

];

const IssueDetail: React.FC = () => {
  const { id } = useParams();
  const issue = issues.find(issue => issue.id === id);

  if (!issue) {
    return <div>Issue not found</div>;
  }

  return (
    <div>
      <h2>{issue.title}</h2>
      <p>{issue.description}</p>
      <p>Status: {issue.status}</p>
    </div>
  );
};

export default IssueDetail;
