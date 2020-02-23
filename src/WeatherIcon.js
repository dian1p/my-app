import React from "react";

function WeatherIcon({ icon }) {
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return <img src={iconUrl} alt="weather icon" />;
}
export default WeatherIcon;