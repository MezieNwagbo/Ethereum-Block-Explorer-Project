import React from "react";

import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input className="searchbar-input" placeholder="Search block here" />
      <h4>Search</h4>
    </div>
  );
};

export default SearchBar;
