import React from "react";
import { useState } from "react";

const WeatherCard = ({ weather, tempe }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeTemperature = () => setIsCelsius(!isCelsius);

  console.log(weather);

  return (
    <article className="card">
      <h1 className="card_title">Weather App</h1>
      <h2 className="card_title">{`${weather?.name}, ${weather?.sys.country}`}</h2>
      <section className="card_first-section">
        <img
          className="card_icon"
          src={
            weather &&
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
          }
          alt=""
        />
      </section>
      <section className="card_second-section">
        <h3 className="second-title">"{weather?.weather[0].description}"</h3>
        <ul className="second_list">
          <li className="second-item">
            <span className="second_span">Wind Speed</span> {weather?.wind.speed} m/s
          </li>
          <li className="second-item">
            <span className="second_span">Clouds</span> {weather?.clouds.all} %
          </li>
          <li className="second-item">
            <span className="second_span">Pressure</span> {weather?.main.pressure} hPa
          </li>
        </ul>
      </section>
      <h2 className="card_temperature">{isCelsius ? `${tempe?.celsius} °C` : `${tempe?.farenheit} °F`}</h2>
      <button className="card_btn" onClick={changeTemperature}>
        {isCelsius ? "Change °F" : "change °C"}
      </button>
    </article>
  );
};

export default WeatherCard;
