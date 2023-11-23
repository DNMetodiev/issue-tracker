import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import IssueList from './components/IssueList/IssueList';
import IssueDetail from './components/IssueDetail/IssueDetail';
import NewIssueForm from './components/NewIssueForm/NewIssueForm';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<IssueList />} />
          <Route path="/issue/:id" element={<IssueDetail />} />
          <Route path="/new-issue" element={<NewIssueForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
