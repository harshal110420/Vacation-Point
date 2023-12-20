import React from "react";

const Activities = ({ activities }) => {
  return (
    <div>
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Activities</h2>
          <ul className="list-disc pl-5">
            {activities.map((activity, index) => (
              <li key={index} className="mb-1">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activities;
