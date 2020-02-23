import React, { useState, useEffect } from "react";
import SearchEngine from "./SearchEngine";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

function AppWeather() {
  const [cities, setCities] = useState({ loaded: false });

  useEffect(function() {
    if (!cities.loaded) {
      search("Amsterdam");
    }
  });
  function showCity(response) {
    setCities({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      code: response.data.weather[0].icon,
      loaded: true
    });
  }
  function search(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=88cb0b2a18f4a84cc455641324b32a73&units=metric`;
    axios.get(url).then(showCity);
  }
  return (
    <div className="App">
      <SearchEngine searched={search} />
      <h2>{cities.city}</h2>
      <WeatherIcon icon={cities.code} />
      <ul className="list">
        <li>Temperature: {cities.temperature}°C</li>
        <li>Humidity: {cities.humidity}%</li>
        <li>Description: {cities.description}</li>
      </ul>
    </div>
  );
}

export default AppWeather;