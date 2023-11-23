import { useParams } from 'react-router-dom';
import { dummyIssues } from '../../models/issues';
import './IssueDetail.css';

const IssueDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const issue = dummyIssues.find(issue => issue.id === id);
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