import React, { useState, useEffect } from "react";
import RestaurantData from "../Restaurants/RestaurantData";

const RestaurantsMiddle = () => {
  const [loading, setLoading] = useState(true);
  const specificCategory = "Trending Restaurant";
  const categoryRestaurants = RestaurantData.filter(
    (restaurant) => restaurant.category === specificCategory
  );
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
  const visibleRestaurants = categoryRestaurants.slice(
    currentRestaurantIndex,
    currentRestaurantIndex + 4
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const isBeginning = currentRestaurantIndex === 0;
  const isEnd = currentRestaurantIndex >= categoryRestaurants.length - 4;

  const handleSlideLeft = () => {
    setCurrentRestaurantIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : categoryRestaurants.length - 1
    );
  };

  const handleSlideRight = () => {
    setCurrentRestaurantIndex((prevIndex) =>
      prevIndex < categoryRestaurants.length - 4 ? prevIndex + 1 : 0
    );
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-5 relative">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          TOP TRENDING RESTAURANTS
        </h2>
        <div className="flex p-3 overflow-x-auto scrollbar-hide">
          {loading
            ? Array.from({ length: 4 }, (_, index) => (
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
            : visibleRestaurants.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mr-1 bg-white rounded-md p-1 shadow-md"
                >
                  <a href={product.href}>
                    <div className="rounded-lg overflow-hidden relative">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-72 h-40 object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <h3 className="text-sm text-gray-700 mr-2">
                        {product.country}, {product.continent}
                      </h3>
                      <span className="flex items-center">
                        {Array.from({ length: product.rating }, (_, index) => (
                          <span key={index} className="text-yellow-500 text-xl">
                            ★
                          </span>
                        ))}
                      </span>
                    </div>
                    <p className="mt-1 text-base font-medium text-gray-900">
                      {product.name}, {product.state}
                    </p>
                  </a>
                </div>
              ))}
        </div>
        {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center"> */}
        {/* <div className="bg-green-500"> */}
        <button
          onClick={handleSlideLeft}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-white/90 text-slate-700 transition duration-300 ${
            isBeginning
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none"
          } lg:h-12 lg:w-12`}
          disabled={isBeginning}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <title>prev slide</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>

        <button
          onClick={handleSlideRight}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-white/90 text-slate-700 transition duration-300 ${
            isEnd
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none"
          } lg:h-12 lg:w-12`}
          disabled={isEnd}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <title>next slide</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* Add media query CSS here */}
      <style>
        {`
          @media (max-width: 640px) {
            .flex > div {
              flex: 0 0 50%; /* Display two slides in a row */
            }
          }
        `}
      </style>
    </div>
  );
};

export default RestaurantsMiddle;
