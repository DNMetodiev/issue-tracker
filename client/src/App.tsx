import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import IssueList from './components/IssueList/IssueList';
import IssueDetail from './components/IssueDetail/IssueDetail';
import NewIssueForm from './components/NewIssueForm/NewIssueForm';
import NavBar from './components/NavBar/NavBar';
import { Issue } from './models/interfaces';

function App() {
  const [showNewIssueModal, setShowNewIssueModal] = useState(false);

  const handleCreateNewIssue = (issue: Issue) => {
    console.log(issue);
    setShowNewIssueModal(false);
  };

  const toggleNewIssueModal = () => setShowNewIssueModal(!showNewIssueModal);

  return (
    <Router>
      <NavBar onSearch={() => { }} onNewIssueClick={toggleNewIssueModal} />
      {showNewIssueModal && (
        <div className="modal-backdrop">
          <NewIssueForm onCreate={handleCreateNewIssue} />
        </div>
      )}
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/issue/:id" element={<IssueDetail />} />
      </Routes>
    </Router>
  );
}

export default App;