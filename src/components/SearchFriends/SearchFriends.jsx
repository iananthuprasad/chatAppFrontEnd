import React, { useState } from 'react';

const SearchFriends = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-friends">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for friends..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {/* Search results will be displayed here */}
        <p>Type a name to search for new friends.</p>
      </div>
    </div>
  );
};

export default SearchFriends;