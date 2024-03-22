import React from 'react';
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
return(
    <div className="weatherInfo">
        <h1>{props.data.city}</h1>
        <span className="description">{props.data.description}</span>
        <WeatherTemperature celsius={props.data.temperature} />

        <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
    </div>
);
}