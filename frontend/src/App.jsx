import { useState, useEffect } from 'react';
import './App.css';
import Weather from './Components/Weather';
import HourlyForecast from './Components/HourlyForecast';
import WindDetails from './Components/WindDetails';
import axios from 'axios';

function App() {
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async (city) => {
    // ✅ Use the passed `city` instead of `country` state directly
    if (!city) return;

    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`;

    try {
      const response = await axios.get(API_URL);
      setWeatherData(response.data);
      console.log(response.data); // ✅ fixed `console.log(data)` (data was undefined)
    } catch (error) {
      console.error('Error fetching weather data:', error.message); // ✅ correct logging
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!country.trim()) return;
    fetchWeather(country);
  };

  useEffect(() => {
   
    fetchWeather('New York');
  }, []);

  return (
    <>
      <Weather
        country={country}
        setCountry={setCountry}
        handleSearch={handleSearch}
        weatherData={weatherData}
      />
      <WindDetails weatherData={weatherData} />
      <HourlyForecast weatherData={weatherData} />
    </>
  );
}

export default App;
