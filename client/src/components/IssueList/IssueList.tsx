import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Table from '../Table/Table';
import { getIssues, createIssue } from '../../services/issueService';
import { Issue } from '../../models/interfaces';
import NewIssueForm from '../NewIssueForm/NewIssueForm';
import Modal from '../Modal/Modal';

const IssueList: React.FC = () => {
  const [ongoingIssues, setOngoingIssues] = useState<Issue[]>([]);
  const [historicalIssues, setHistoricalIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewIssueModal, setShowNewIssueModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchIssues = async () => {
      try {
        const ongoing = await getIssues('Open', 1, 5);
        const historical = await getIssues('Closed', 1, 5);
        setOngoingIssues(ongoing);
        setHistoricalIssues(historical);
      } catch (error) {
        console.error('Failed to fetch issues:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  const handleCreateNewIssue = async (newIssueData: Omit<Issue, 'id'>) => {
    try {
      const newIssue = await createIssue(newIssueData);
      setOngoingIssues(prevIssues => [...prevIssues, newIssue]);
      setShowNewIssueModal(false);
    } catch (error) {
      console.error('Error creating new issue:', error);
    }
  };

  if (loading) {
    return <div>Loading issues...</div>;
  }

  return (
    <div className="issue-list-page">
      <NavBar onSearch={() => { }} onNewIssueClick={() => setShowNewIssueModal(true)} />
      <Modal show={showNewIssueModal} onClose={() => setShowNewIssueModal(false)}>
        <NewIssueForm onCreate={handleCreateNewIssue} />
      </Modal>
      <Table issues={ongoingIssues} title="Ongoing Issues" />
      <Table issues={historicalIssues} title="Historical Issues" />
    </div>
  );
};

export default IssueList;