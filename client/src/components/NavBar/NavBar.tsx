import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

interface NavBarProps {
  onSearch: (query: string) => void;
  onNewIssueClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch, onNewIssueClick }) => {
  return (
    <div className="navbar">
      <div className="logo">Issue Tracker</div>
      <SearchBar onSearch={onSearch} />
      <button className="new-issue-btn" onClick={onNewIssueClick}>New Issue</button>
    </div>
  );
};

export default NavBar;
