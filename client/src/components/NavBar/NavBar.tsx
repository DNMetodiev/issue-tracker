// import React from 'react';
import './NavBar.css';

type NavBarProps = {
  onNewIssueClick: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ onNewIssueClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-items">
        <button onClick={onNewIssueClick}>New Issue</button>
        <button>Past Issues</button>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default NavBar;
//THiS IS A COMMENT TO TEST GITHUB