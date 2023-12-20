const fetchWeatherForDestination = async (cityName) => {
  try {
    const apiKey = "a8836ba500413e0d88f3df47888f2984"; // Replace with your actual API key from OpenWeatherMap
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      return data; // Return the weather data
    } else {
      throw new Error("Failed to fetch weather data");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default fetchWeatherForDestination;
