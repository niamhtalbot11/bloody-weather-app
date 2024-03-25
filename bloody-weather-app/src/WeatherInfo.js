import React from 'react';

import WeatherTemperature from "./WeatherTemperature";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
return(
    <div className="WeatherInfo">
        <h1 className="city">{props.data.city}</h1>
        <FormatDate className="date" date={props.data.date}/>
        <span className="description text-capitalize">{props.data.description}</span>
        <WeatherTemperature  id="temperature" celsius={props.data.temperature} />
        <WeatherIcon  code={props.data.iconUrl}  />
        
            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="windSpeed">Wind: {props.data.wind} km/h</div>
          
    </div>
);
}