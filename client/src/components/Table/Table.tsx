import { Incident } from '../../models/interfaces';

interface TableProps {
  incidents: Incident[];
  title: string;
}

const Table: React.FC<TableProps> = ({ incidents, title }) => {
  return (
    <div className="table-container">
      <h2>{title}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Incident</th>
            <th>Case ID</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.incidentId}</td>
              <td>{incident.caseId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;