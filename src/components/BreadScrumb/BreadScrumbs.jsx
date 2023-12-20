import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLast = index === array.length - 1;

      return (
        <span key={crumb}>
          <Link
            to={currentLink}
            className={`text-blue-600 hover:underline ${
              isLast ? "font-semibold" : ""
            }`}
          >
            {crumb}
          </Link>
          {!isLast && <span className="mx-2">&gt;</span>}
        </span>
      );
    });

  return (
    <div className=" p-4 ">
      <div className="max-w-7xl mx-12">
        <nav className="text-base font-medium" aria-label="Breadcrumb">
          {crumbs}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
