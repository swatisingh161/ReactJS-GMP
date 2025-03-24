import React, { useState } from "react";

const SearchForm = ({ initialQuery = "", onSearch }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        aria-label="Search input"
      />
      <button onClick={handleSearch} aria-label="Search">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
