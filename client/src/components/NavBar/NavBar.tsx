// import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-items">
        <button>New Issue</button>
        <button>Past Issues</button>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default NavBar;
