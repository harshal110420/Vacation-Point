import React from "react";

const LocalSpecialty = ({ specialty }) => {
  return (
    <div className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={specialty.imgSrc}
        alt={specialty.name}
        className="h-48 w-full object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{specialty.name}</h3>
        <p className="text-gray-600 mb-2">
          Description: {specialty.description}
        </p>
      </div>
    </div>
  );
};

export default LocalSpecialty;
