import React, { useEffect, useState } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    pressure,
    humidity,
    weathermood,
    speed,
    country,
    sunset,
    name,
  } = tempInfo;
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        default:setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);
  //for milisec is converted into hours and minute
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeSt = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temprature">
            <span>{temp}&deg;</span>
          </div>

          <div className="discription">
            <div className="wearherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
        </div>

        <div className="weatherExtraInfo">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info">
              {timeSt}PM
              <br />
              Sunset
            </p>
          </div>
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info">
              {humidity}
              <br />
              Humidity
            </p>
          </div>
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p className="extra-info">
              {pressure}
              <br />
              Pressure
            </p>
          </div>
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className="extra-info">
              {speed}
              <br />
              Speed
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WeatherCard;
