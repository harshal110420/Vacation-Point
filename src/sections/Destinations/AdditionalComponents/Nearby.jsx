import React from "react";

const NearbyPlace = ({ place }) => {
  return (
    <div className="w-max h-max flex-shrink-0 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="border rounded-lg overflow-hidden shadow-md">
        <div className="relative">
          <img
            src={place.imageSrc}
            alt={place.imageAlt}
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{place.name}</h3>
          <p className="text-sm font-medium text-gray-600">
            {place.description}
          </p>
          <h4 className="text-base font-semibold">
            Address:
            <span className="text-sm text-gray-600">{place.address}</span>
          </h4>
          <h4 className="text-base font-semibold">
            Timing:
            <span className="text-sm text-gray-600">{place.hours}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default NearbyPlace;
