import React from "react";
import axios from 'axios';


function App() {
  // const url = 'https://api.openweathermap.org/data/2.5/weather?q{city name}&appid=021958297edd6d08bbef210549806b9c'

  return (
    <>
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>City Name</p>
          </div>
          <div className="temprature">
            <h1>10°C</h1>
          </div>
          <div className="description">
            <p>Cloud</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>7°C</p>
          </div>
          <div className="humidity">
            <p>95%</p>
          </div>
          <div className="wind">5 km/h</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
