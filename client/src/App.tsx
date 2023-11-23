import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';
import NewIssueForm from './components/NewIssueForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/issue/:id" element={<IssueDetail />} />
        <Route path="/new-issue" element={<NewIssueForm />} />
      </Routes>
    </Router>
  );
}

export default App;
