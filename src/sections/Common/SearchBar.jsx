// SearchBar.jsx
import React from "react";

const SearchBar = ({ query, handleSearch, handleResetQuery }) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search Here..."
        value={query}
        onChange={handleSearch}
        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-gray-500 focus:outline-none focus:border-grey-500"
      />
      <button
        onClick={handleResetQuery}
        className="bg-gray-700 text-white px-4 py-1 rounded-r-md ml-[-1px]"
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
