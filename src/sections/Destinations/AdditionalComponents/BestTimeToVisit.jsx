import React from "react";

const BestTimeToVisit = ({ bestTimeToVisit }) => {
  const { drySeason, reasonsToVisit, highSeason } = bestTimeToVisit;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Best Time to Visit</h2>
      <div className="text-base font-normal">
        <p className="">{drySeason.description}</p>
        <p className="">
          The driest month is {drySeason.details[0].month}, with{" "}
          {drySeason.details[0].rainfall} of rainfall and{" "}
          {drySeason.details[0].sunnyDays}. {drySeason.details[0].note}
        </p>
        <p className="">
          The wettest month is {drySeason.details[1].month}, with{" "}
          {drySeason.details[1].rainfall} of rain over{" "}
          {drySeason.details[1].rainyDays}. {drySeason.details[1].note}
        </p>
        <p className="text-base font-semibold">
          Here are some other reasons to visit during the dry season:
        </p>
        <ul className="list-disc ml-8">
          {reasonsToVisit.map((reason, index) => (
            <li key={index} className="text-base font-normal">
              {reason}
            </li>
          ))}
        </ul>
        <p className="">
          The high season is the best time for festivals and partying, which
          falls in {highSeason.months.join("–")} and is known for{" "}
          {highSeason.description}.
        </p>
      </div>
    </div>
  );
};

export default BestTimeToVisit;
