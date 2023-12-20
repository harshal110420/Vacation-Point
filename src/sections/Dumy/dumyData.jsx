import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hotelsdata from "../data/Hotels";

const JourneyCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };
  const handleNext = () => {
    const lastVisibleIndex = Math.ceil(data.length / slidesToShow) - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex === lastVisibleIndex ? prevIndex : prevIndex + 1
    );
  };

  const slidesToShow = 4; // Number of images to show in each slide
  const isFirstSlide = currentIndex === 0;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          MOST LOVED HOTELS IN ASIA BY OUR CUSTOMERS
        </h2>
        <div className="mt-3 relative">
          <ul className="flex w-full overflow-hidden p-0 justify-center">
            {data.map((product, index) => {
              const slideIndex = Math.floor(index / slidesToShow);
              return (
                <li
                  key={product.id}
                  className={`w-1/${slidesToShow} rounded-lg px-1 ${
                    slideIndex === currentIndex ? "" : "hidden"
                  }`}
                >
                  <Link to={`/HotelsDetails/${product.id}`}>
                    <div className="p-2 py-1 my-1 mx-1">
                      <div className="rounded-md overflow-hidden relative">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="transform rounded-xl h-26 w-26 sm:h-64 sm:w-64 shadow-xl transition duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="mx-3">
                        <h3 className="text-lg font-bold mx-1">
                          {product.name}
                        </h3>
                        <h3 className="font-medium mx-1">{product.ratings}</h3>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="absolute left-0 top-1/3 flex items-center justify-between w-full px-4">
            <button
              onClick={handlePrev}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-white/90 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12 ${
                data.length <= slidesToShow || isFirstSlide
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={isFirstSlide} // Disabling based on isFirstSlide
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-white/90 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12 ${
                data.length <= slidesToShow ? "hidden" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HotelsMiddle() {
  // Use your journeyData here
  return <JourneyCarousel data={hotelsdata} />;
}
