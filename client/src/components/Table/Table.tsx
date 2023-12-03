import React from 'react';
import { Issue } from '../../models/interfaces';
import './Table.css';

interface TableProps {
  issues: Issue[];
  title: string;
}

const Table: React.FC<TableProps> = ({ issues, title }) => {
  if (!issues.length) {
    return <div>No {title} to display.</div>;
  }

  return (
    <>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(issue => (
            <tr key={issue.id}>
              <td>{issue.caseId}</td>
              <td>{issue.title}</td>
              <td>{issue.description}</td>
              <td>{issue.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;