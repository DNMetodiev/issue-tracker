import React, { useState, useEffect } from 'react';
import { getIssues } from '../../services/issueService';
import Table from '../Table/Table';
import NavBar from '../NavBar/NavBar';
import { Incident } from '../../models/interfaces';

const IssueList: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const fetchedIncidents = await getIssues();
        setIncidents(fetchedIncidents as Incident[]);
      } catch (error) {
        console.error('Failed to fetch incidents:', error);
      }
    };

    fetchIncidents();
  }, []);

  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log('Search query:', query);
  };

  const handleNewIssue = () => {
    // TODO: Implement new issue functionality
    console.log('Handle new issue');
  };

  const ongoingIncidents = incidents.filter((incident) => incident.status === 'Ongoing');
  const historicalIncidents = incidents.filter((incident) => incident.status === 'Historical');

  return (
    <div className="issue-list-page">
      <NavBar onSearch={handleSearch} onNewIssue={handleNewIssue} />
      <Table incidents={ongoingIncidents} title="Ongoing Incidents" />
      <Table incidents={historicalIncidents} title="Historical Incidents" />
    </div>
  );
};

export default IssueList;