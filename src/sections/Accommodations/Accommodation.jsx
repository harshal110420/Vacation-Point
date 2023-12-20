import React from "react";

const AccommodationCard = ({ name, type, facilities, rating, priceRange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-500 mb-2">{type}</p>
      <div className="flex items-center mb-4">
        {facilities.map((facility, index) => (
          <span key={index} className="mr-2 text-gray-400">
            {/* Replace the SVG icons with your own */}
            {/* Example SVG icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {facility}
          </span>
        ))}
      </div>
      <div className="flex items-center mb-2">
        <span className="text-gray-600">{rating}</span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-600">{priceRange}</span>
      </div>
    </div>
  );
};

export default AccommodationCard;
