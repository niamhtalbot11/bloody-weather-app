import React, {useState} from "react";


export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

function showFahrenheit (event) {
  event.preventDefault();
  setUnit("fahrenheit");
}

function showCelsius (event){
  event.preventDefault();
  setUnit("celsius");
}

function fahrenheit (){
  return (props.celsius * 9) / 5 + 32;
}


  if (unit === "celsius") {
  return (
    <div className="WeatherTemperature">
      <span id="temperature">{Math.round(props.celsius)}</span>
     <span id="unit"> °C | {" "}
      <a href ="/" id="unit" onClick ={showFahrenheit}> °F </a>
      </span></div>
  );
} else {
  return (
    <div className="WeatherTemperature">
      <span id="temperature">{Math.round(fahrenheit())}</span>
      <span id="unit">
      <a href ="/" id="unit"onClick ={showCelsius}>°C </a>
      | {" "}
       °F
       </span>
    </div>
  );
}
}