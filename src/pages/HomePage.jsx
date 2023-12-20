import React from "react";
import Home from "../sections/Home/Home";
import DestinationsMiddle from "../sections/Destinations/DestinationMiddle";
import HotelsMiddle from "../sections/Hotels/HotelsMiddle";
import RestaurantsMiddle from "../sections/Restaurants/RestaurantsMiddle";
import Blogs from "../sections/BlogSection/BlogCards";
import AboutUs from "../sections/AboutUs/AboutUs";
import RestaurantData from "../sections/Restaurants/RestaurantData";
import HotelData from "../sections/Hotels/hotelsData";
import DestinationData from "../sections/Destinations/destinationsData";

const HomePage = () => {
  const firstTwelveRestaurantsData = RestaurantData.slice(0, 12);
  const firstTwelveHotelsData = HotelData.slice(0, 12);
  const firstTwelveDestinationData = DestinationData.slice(0, 12);
  return (
    <div className="flex flex-col min-h-screen">
      <Home />
      <DestinationsMiddle
        firstTwelveDestinationData={firstTwelveDestinationData}
      />
      <HotelsMiddle firstTwelveHotelsData={firstTwelveHotelsData} />
      <RestaurantsMiddle
        filteredRestaurantsForhome={firstTwelveRestaurantsData}
      />
      {/* <Blogs /> */}
      <AboutUs />
    </div>
  );
};

export default HomePage;
