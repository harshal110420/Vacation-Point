import React from "react";

const RecommendedFor = ({ recommendedFor }) => {
  return (
    <div>
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Recommended For</h2>
          <ul className="list-disc pl-5">
            {recommendedFor.map((recommendation, index) => (
              <li key={index} className="mb-1">
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecommendedFor;
