import React, { useState, useEffect } from "react";
import hotelsData from "./hotelsData";
import SearchBar from "../Common/SearchBar";
import PoolIcon from "@mui/icons-material/Pool";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LikeButton from "../Common/LikeButton";
import SavedButton from "../Common/SavedButton";

const Hotels = (props) => {
  const { firstTwelveHotelsData } = props;
  const [query, setQuery] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);
  const [loading, setLoading] = useState(true);

  // code to reset the search input as well as filter's
  const handleResetQuery = () => {
    setQuery("");
    setFilteredHotels(hotelsData);
  };

  // code to search Destinations by "country,continent,name,state"
  const handleSearch = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setQuery(inputValue);
    const filtered = hotelsData.filter(
      (hotel) =>
        hotel.country.toLowerCase().includes(inputValue) ||
        hotel.city.toLowerCase().includes(inputValue) ||
        hotel.name.toLowerCase().includes(inputValue)
    );
    setFilteredHotels(filtered);
  };

  const categories = Array.from(
    new Set(hotelsData.map((item) => item.category))
  );

  const handleFilterByCategory = (selectedCategory) => {
    if (selectedCategory === "") {
      setFilteredHotels(hotelsData);
    } else {
      const filtered = hotelsData.filter(
        (hotel) => hotel.category === selectedCategory
      );
      setFilteredHotels(filtered);
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
                class="w-32 md:w-40 h-10 border-2 border-gray-500 focus:outline-none focus:border-grey-500 text-grey-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              >
                <option className="" value="">
                  All
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
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
              : filteredHotels.map((hotel) => (
                  <a key={hotel.id} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={hotel.imgSrc}
                        // alt={hotel.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <h3 className="text-sm text-gray-700 ">
                        {hotel.city}, {hotel.country}
                      </h3>
                      <span className="flex items-center">
                        {Array.from({ length: hotel.rating }, (_, index) => (
                          <span key={index} className="text-yellow-500 text-xl">
                            ★
                          </span>
                        ))}
                      </span>
                    </div>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {hotel.name}
                    </p>
                    {/* <div className="flex items-center mt-1 text-gray-600 border-2 rounded-lg p-1">
                      <h1 className="font-semibold">Facilities: </h1>
                      {hotel.facilities.map((facility, index) => (
                        <span key={index} className="mr-2 flex items-center">
                          {facility === "Swimming Pool" && <PoolIcon />}
                          {facility === "Gym" && <FitnessCenterIcon />}
                          {facility === "Spa" && (
                            <FontAwesomeIcon icon="faSpa" className="mr-1" />
                          )}
                          {facility === "Restaurant" && <RestaurantIcon />}
                        </span>
                      ))}
                    </div> */}
                    <div className="px-1">
                      <LikeButton productId={hotel.id} contentType="hotel" />
                      <SavedButton productId={hotel.id} contentType="hotel" />
                    </div>
                  </a>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
