import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";

function Weather() {
  const { city } = useWeatherContext();

  console.log(city);
  return (
    <>
      {city ? (
        <div className="container bg-img">
          <div className="row">
            <div className="col-6 mx-auto">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  className="w-50"
                  src={city.current.condition.icon}
                  alt={city.current.condition.text}
                />
                <span className="location">{city.location.name + "," + city.location.country}</span>
              </div>
            </div>
            <div className="content col-8 mx-auto d-flex justify-content-between">
              <div className="col-6 d-flex flex-column">
                <span>
                  Tempurature : {city.current.temp_c}C / {city.current.temp_f}F
                </span>
                <span>Wind : {city.current.wind_kph}km/h</span>
                <span>Wind Direction : {city.current.wind_dir}</span>
              </div>
              <div className="col-6 d-flex flex-column">
                <span>Cloud : {city.current.cloud} %</span>
                <span>Uv : {city.current.uv}</span>
                <span>Last Update : {city.current.last_updated}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span className="loading">. . . Loading [/////..]</span>
      )}
    </>
  );
}

export default Weather;
