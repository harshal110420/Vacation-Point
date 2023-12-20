import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import journeyData from "./destinationsData";
import LocationDetails from "./AdditionalComponents/LocationDetails";
import ImageGallery from "./AdditionalComponents/ImageGallery";
import BestTimeToVisit from "./AdditionalComponents/BestTimeToVisit";
import Activities from "./AdditionalComponents/Activities";
import Facilities from "./AdditionalComponents/Facilities";
import RecommendedFor from "./AdditionalComponents/RecommendedFor";
import NearbyPlace from "./AdditionalComponents/Nearby";
import Accommodation from "./AdditionalComponents/Accommodation";
import DiningOption from "./AdditionalComponents/DiningOption";
import LocalSpecialty from "./AdditionalComponents/LocalSpecialty";
import fetchWeatherForDestination from "./AdditionalComponents/fetchWeatherForDestination"; // Import the function to fetch weather data

export default function DetailDestinations() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [temperature, setTemperature] = useState(null);

  const cachedWeather = useMemo(() => {
    return {};
  }, []);

  useEffect(() => {
    const foundDestination = journeyData.find(
      (item) => item.id === parseInt(id)
    );
    if (foundDestination) {
      setDestination(foundDestination);
    }
    setLoading(false);
  }, [id]);

  const fetchData = async (cityName) => {
    try {
      if (cachedWeather[cityName]) {
        setWeatherData(cachedWeather[cityName]);
        return;
      }

      const data = await fetchWeatherForDestination(cityName);
      console.log("Fetched weather data:", data);
      if (data && data.main && data.main.temp) {
        let weatherTemp = data.main.temp - 273.15;
        weatherTemp = weatherTemp.toFixed(2);
        setWeatherData(data);
        setTemperature(`${weatherTemp}°C`);
        cachedWeather[cityName] = data;
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const foundDestination = journeyData.find(
      (item) => item.id === parseInt(id)
    );
    if (foundDestination) {
      setDestination(foundDestination);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    const city = destination?.additionalDetails?.location?.city;
    if (city) {
      fetchData(city);
    }
  }, [destination?.additionalDetails?.location?.city, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  const { additionalDetails } = destination;

  const destinationName =
    additionalDetails?.DestinationName || "Destination Name Not Found";
  const { country, city, description } = additionalDetails?.location || {};
  const images = additionalDetails?.images || [];
  const nearbyPlaces = additionalDetails?.nearbyPlaces || [];
  const activities = additionalDetails?.activities || [];
  const facilities = additionalDetails?.facilities || [];
  const recommendedFor = additionalDetails?.recommendedFor || [];
  const accommodations = additionalDetails?.accommodations || [];
  const diningOptions = additionalDetails?.diningOptions || [];
  const localSpecialties = additionalDetails?.localSpecialties || [];
  const bestTimeToVisit = additionalDetails?.bestTimeToVisit || [];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-8">
          {destinationName}
        </h2>
        {/* Location Details Components */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Location Details</h2>
          <LocationDetails
            country={country}
            city={city}
            description={description}
          />
        </div>
        {/*-------------------------------------------------------*/}
        <div className="mb-12">
          <ImageGallery images={images} />
        </div>
        {/*-------------------------------------------------------*/}
        <div className="flex flex-col md:flex-row">
          {/* Best Time to Visit */}
          <div className="md:w-1/2">
            <div className="mb-12">
              <BestTimeToVisit bestTimeToVisit={bestTimeToVisit} />
            </div>
          </div>
          {/* Weather Card */}
          <div className="md:w-1/2">
            {weatherData && (
              <div className="mt-2">
                <h2 className="text-xl font-semibold mb-4">
                  Weather for {destination?.additionalDetails?.location?.city},{" "}
                  {destination?.additionalDetails?.location?.country}
                </h2>
                {/* Weather content */}
                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      className="h-16 w-16"
                      src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                      alt="Weather Icon"
                    />
                  </div>
                  <div>
                    <p className="text-lg">Temperature: {temperature}</p>
                    <p className="text-sm">
                      Description: {weatherData?.weather[0]?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/*-------------------------------------------------------*/}
        <div className="flex gap-6">
          <div className="flex-1">
            <Activities activities={activities} />
          </div>
          <div className="flex-1">
            <Facilities facilities={facilities} />
          </div>
          <div className="flex-1">
            <RecommendedFor recommendedFor={recommendedFor} />
          </div>
        </div>
        {/*-------------------------------------------------------*/}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Nearby Places</h2>
          {/* Display nearby places */}
          <div className="flex flex-nowrap overflow-x-auto gap-4 scrollbar-hide">
            {nearbyPlaces.map((place) => (
              <NearbyPlace key={place.id} place={place} />
            ))}
          </div>
        </div>
        {/*-------------------------------------------------------*/}
        <div className="mt-6">
          <h2 className="text-3xl font-semibold mb-4">
            Bali Hotels And Places To Stay
          </h2>
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-4">
            {accommodations.map((accommodation, index) => (
              <Accommodation key={index} accommodation={accommodation} />
            ))}
          </div>
        </div>
        {/*-------------------------------------------------------*/}

        <div className="mt-14">
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-4">
              Best Dining Options In Bali.
            </h2>
            <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-4">
              {diningOptions.map((option, index) => (
                <DiningOption key={index} option={option} />
              ))}
            </div>
          </div>
          ;
        </div>
        {/* local food */}
        <div className="mt-14">
          <h2 className="text-3xl font-semibold mb-4">
            THE BEST OF LOCAL FOOD IN BALI
          </h2>
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-4">
            {localSpecialties.map((specialty, index) => (
              <LocalSpecialty key={index} specialty={specialty} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
