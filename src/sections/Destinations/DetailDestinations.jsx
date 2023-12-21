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
import clouds from "./images/clouds.jpg";
import Snow from "./images/Snow.jpg";
import Clear from "./images/clearsky.jpg";
import Drizzle from "./images/Drizzle.jpg";
import Rain from "./images/Rain.jpg";
import Thunderstorm from "./images/Thunderstorm.jpg";

const weatherImages = {
  Clouds: clouds,
  Snow: Snow,
  Clear: Clear,
  Drizzle: Drizzle,
  Rain: Rain,
  Thunderstorm: Thunderstorm,
  // Add more conditions and respective video URLs as needed
};

export default function DetailDestinations() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [bgImage, setBgImage] = useState("");

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

        // Inside fetchData function, after setting weatherData and temperature
        const main = data.weather[0].main;

        switch (main) {
          case "Clouds":
            setBgImage(weatherImages.Clouds);
            break;
          case "Snow":
            setBgImage(weatherImages.Snow);
            break;
          case "Clear":
            setBgImage(weatherImages.Clear);
            break;
          case "Drizzle":
            setBgImage(weatherImages.Drizzle);
            break;
          case "Rain":
            setBgImage(weatherImages.Rain);
            break;
          case "Thunderstorm":
            setBgImage(weatherImages.Thunderstorm);
            break;
          default:
            setBgImage(weatherImages.Clear);
            break;
        }
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

        {/* ------------------- */}
        <div className="mb-12">
          <BestTimeToVisit bestTimeToVisit={bestTimeToVisit} />
        </div>
        {/*-------------------------------------------------------*/}
        <div>
          <h1 className="text-3xl font-semibold mb-4">Weather Data</h1>
          <div className="flex justify-center">
            <div className="w-2/3 md:w-1/2 relative rounded-lg border-2  overflow-hidden shadow-lg">
              {/* Background Image */}
              <div
                className=""
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px", // Adjust the height as needed
                }}
              >
                {/* Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-start items-center z-10">
                  {weatherData && (
                    <div className="text-black text-justify">
                      {/* Weather Information */}
                      <h2 className="text-4xl font-semibold mb-4">
                        {destination?.additionalDetails?.location?.city},{" "}
                        {destination?.additionalDetails?.location?.country}
                      </h2>
                      <div
                        className="flex items-center justify-center mb-4 rounded-2xl bg-transparent"
                        style={{ backdropFilter: "blur(6px)" }}
                      >
                        <div>
                          <p className="text-lg font-semibold">
                            Temperature: {temperature}
                          </p>
                          <p className="text-lg font-semibold">
                            Description: {weatherData?.weather[0]?.main},{" "}
                            {weatherData?.weather[0]?.description}
                          </p>
                        </div>
                      </div>
                      {/* Other Weather Details */}
                      {/* Add more weather details here */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------------------------------------------*/}
        <div className="flex mt-12  gap-6">
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
