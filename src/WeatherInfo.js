import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="date">
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li className="temperature">
              {Math.round(props.data.temperature)}°F
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src={props.data.icon_url} alt={props.data.description} />
          <span className="text-capitalize">{props.data.description}</span>
        </div>
        <div className="col-6">
          <br />
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
