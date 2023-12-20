import React from "react";

const DiningOption = ({ option }) => {
  return (
    <div className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={option.image}
        alt={option.name}
        className="h-48 w-full object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
        <p className="text-gray-600 mb-2">Cuisine: {option.cuisine}</p>
        <p className="text-gray-600 mb-2">Rating: {option.rating}</p>
        <p className="text-gray-600 mb-2">Price Range: {option.priceRange}</p>
        <a href={option.website} className="text-blue-600 hover:underline">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default DiningOption;
