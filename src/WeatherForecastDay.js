import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.description}
        width={50}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-maximum">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-minimum">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
