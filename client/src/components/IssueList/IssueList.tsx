import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Table from '../Table/Table';
import { getIssues, createIssue } from '../../services/issueService';
import { Issue } from '../../models/interfaces';
import NewIssueForm from '../NewIssueForm/NewIssueForm';
import Modal from '../Modal/Modal';

const IssueList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewIssueModal, setShowNewIssueModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchIssues = async () => {
      try {
        const fetchedIssues = await getIssues();
        setIssues(fetchedIssues);
      } catch (error) {
        console.error('Failed to fetch issues:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  const handleCreateNewIssue = async (newIssueData: Issue) => {
    try {
      const newIssue = await createIssue(newIssueData);
      setIssues(prevIssues => [...prevIssues, newIssue]);
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
      <Table issues={issues} title="Ongoing Issues" />
    </div>
  );
};

export default IssueList;