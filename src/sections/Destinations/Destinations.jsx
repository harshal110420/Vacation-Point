import React, { useState, useEffect } from "react";
import destinationsData from "./destinationsData";
import SearchBar from "../Common/SearchBar";
import LikeButton from "../Common/LikeButton";
import SavedButton from "../Common/SavedButton";
import { Link } from "react-router-dom";

const Destinations = (props) => {
  const { firstTwelveDestinationData } = props;

  const [query, setQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinationsData);
  const [loading, setLoading] = useState(true);

  // code to reset the search input as well as filter's
  const handleResetQuery = () => {
    setQuery("");
    setFilteredDestinations(destinationsData);
  };
  // code to search Destinations by "country,continent,name,state"
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

  const categories = Array.from(
    new Set(destinationsData.map((item) => item.category))
  );

  const handleFilterByCategory = (selectedCategory) => {
    if (selectedCategory === "") {
      setFilteredDestinations(destinationsData);
    } else {
      const filtered = destinationsData.filter(
        (destination) => destination.category === selectedCategory
      );
      setFilteredDestinations(filtered);
    }
  };

  useEffect(() => {
    // Simulating loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the duration as needed

    // Clear timeout on component unmount (cleanup)
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // /////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex justify-center">
            <div class="flex flex-row md:flex-row gap-3 items-center">
              <SearchBar
                query={query}
                handleSearch={handleSearch}
                handleResetQuery={handleResetQuery}
              />

              <select
                onChange={(e) => handleFilterByCategory(e.target.value)}
                id="pricingType"
                name="pricingType"
                className="w-40 md:w-40 h-10 border-2 border-gray-500 focus:outline-none focus:border-grey-500 text-grey-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              >
                <option className="py-1" value="">
                  All
                </option>
                {categories.map((category, index) => (
                  <option
                    key={index}
                    value={category}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {loading
              ? Array.from({ length: 8 }, (_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <div className="h-full w-full bg-gray-300"></div>
                    </div>
                    <div className="mt-4 text-sm text-gray-700">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                    <div className="mt-1 text-lg font-medium text-gray-900">
                      <div className="h-6 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))
              : filteredDestinations.map((destination) => (
                  <Link
                    key={destination.id}
                    to={`/destinationsDetails/${destination.id}`}
                  >
                    <div
                      key={destination.id}
                      href={destination.href}
                      className="group relative"
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative">
                        <img
                          src={destination.imageSrc}
                          alt={destination.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="flex justify-between mt-2">
                        <h3 className="text-sm text-gray-700  mr-2">
                          {destination.country}, {destination.continent}
                        </h3>
                        <span className="flex items-center">
                          {Array.from(
                            { length: destination.rating },
                            (_, index) => (
                              <span
                                key={index}
                                className="text-yellow-500 text-xl"
                              >
                                ★
                              </span>
                            )
                          )}
                        </span>
                      </div>
                      <p className="mt-1 text-base font-medium text-gray-900">
                        {destination.name}, {destination.state}
                      </p>
                      <div className="px-1 flex">
                        <LikeButton
                          productId={destination.id}
                          contentType="destination"
                        />
                        <SavedButton
                          productId={destination.id}
                          contentType="destination"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
