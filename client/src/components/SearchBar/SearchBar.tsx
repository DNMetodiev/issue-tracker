// src/components/SearchBar.tsx
import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
