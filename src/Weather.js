import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Queens, NY</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Thursday 21:35</li>
            <li>
              Sunny
              <img
                src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-22.png"
                alt="Sunny"
              />
            </li>
            <li>10°C</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
