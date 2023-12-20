import React from "react";

const Facilities = ({ facilities }) => {
  return (
    <div>
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Facilities</h2>
          <ul className="list-disc pl-5">
            {facilities.map((facility, index) => (
              <li key={index} className="mb-1">
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
