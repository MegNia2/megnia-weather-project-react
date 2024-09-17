import react, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [results, setResults] = useState({ ready: false });

  function showWeather(response) {
    setResults({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleChange(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa09763d916df0424c840d55bfc2d2c9&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleResponse(event) {
    setCity(event.target.value);
  }
  let form = (
    <div>
      <form onSubmit={handleChange}>
        <input type="Search" onChange={handleResponse}></input>
        <button>Submit</button>
      </form>
    </div>
  );

  if (results.ready) {
    return (
      <div>
        <ul>
          <li>Temperature: {Math.round(results.temperature)}</li>
          <li>Description: {results.description}</li>
          <li>Humidity: {results.humidity}</li>
          <li>Wind: {results.wind}</li>
          <li>
            <img src={results.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
