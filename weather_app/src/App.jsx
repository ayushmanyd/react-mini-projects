import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=021958297edd6d08bbef210549806b9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            placeholder="Type Location & Enter"
            type="text"
          />
        </div>
        <div className="container">
          {data.name != undefined && (
            <>
              <div className="top">
                <div className="location">
                  <p>
                    {data.name}, {data.main ? data.sys.country : null}
                  </p>
                </div>
                <div className="temprature">
                  {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                </div>
                <div className="description">
                  <p>{data.weather ? data.weather[0].main : null}</p>
                </div>
              </div>

              {/* BottomBar 1 */}
              <div className="bottom1">
                <div className="feels">
                  {data.main ? (
                    <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ? (
                    <p className="bold">{data.main.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.main ? (
                    <p className="bold">{data.wind.speed.toFixed()}km/h</p>
                  ) : null}
                  <p>Wind</p>
                </div>
              </div>

              {/* BottomBar 2 */}
              <div className="bottom2">
                <div className="visibility">
                  {data.main ? (
                    <p className="bold">{data.visibility/1000}Km</p>
                  ) : null}
                  <p>Visibility</p>
                </div>
                <div className="temp_max">
                  {data.main ? (
                    <p className="bold">{data.main.temp_max.toFixed()}°C</p>
                  ) : null}
                  <p>Max Temp</p>
                </div>
                <div className="temp_min">
                  {data.main ? (
                    <p className="bold">{data.main.temp_min.toFixed()}°C</p>
                  ) : null}
                  <p>Min Temp</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
