import React, { useState, useEffect } from "react";
import destinationsData from "./destinationsData";

const Destinations = () => {
  const [query, setQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinationsData);

  const handleResetQuery = () => {
    setQuery("");
    setFilteredDestinations(destinationsData);
  };

  const handleSearch = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setQuery(inputValue);
    const filtered = destinationsData.filter(
      (destination) =>
        destination.country.toLowerCase().includes(inputValue) ||
        destination.continent.toLowerCase().includes(inputValue) ||
        destination.name.toLowerCase().includes(inputValue) ||
        destination.state.toLowerCase().includes(inputValue)
    );
    setFilteredDestinations(filtered);
  };

  const handleSortByName = () => {
    const sortedByName = [...filteredDestinations].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredDestinations(sortedByName);
  };

  const handleSortByCountry = () => {
    const sortedByCountry = [...filteredDestinations].sort((a, b) =>
      a.country.localeCompare(b.country)
    );
    setFilteredDestinations(sortedByCountry);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between mb-8">
            <div className="flex items-center">
              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search destinations..."
                value={query}
                onChange={handleSearch}
                className="border-2 border-gray-300 px-4 py-2 rounded-md focus:outline-none text-gray-800 placeholder-gray-500"
              />
              {/* Clear Button */}
              <button
                onClick={handleResetQuery}
                className="ml-4 px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors focus:outline-none"
              >
                Clear
              </button>
            </div>
            {/* Side Panel for Sorting */}
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Sort By</h3>
              <button
                onClick={handleSortByName}
                className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md mb-2 mr-2"
              >
                Name
              </button>
              <button
                onClick={handleSortByCountry}
                className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md mb-2"
              >
                Country
              </button>
            </div>
          </div>

          {/* Display Destinations */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredDestinations.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {product.country}, {product.continent}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.name} , {product.state}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
