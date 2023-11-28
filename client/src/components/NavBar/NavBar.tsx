import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

interface NavBarProps {
  onSearch: (query: string) => void;
  onNewIssue: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch, onNewIssue }) => {
  return (
    <div className="navbar">
      <div className="logo">Issue Tracker</div>
      <SearchBar onSearch={onSearch} />
      <button className="new-issue-btn" onClick={onNewIssue}>New Issue</button>
    </div>
  );
};

export default NavBar;
