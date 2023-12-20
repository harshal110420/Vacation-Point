// LocationDetails.jsx
import React from "react";

const LocationDetails = ({ country, city, description }) => {
  return (
    <div className="p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Country: {country}</h3>
      <h3 className="text-lg font-semibold mb-2">City: {city}</h3>
      <h3 className="text-lg font-semibold mb-2">About:</h3>
      <p>{description}</p>
    </div>
  );
};

export default LocationDetails;
