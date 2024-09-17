import Weather from "./Weather";

function App() {
  return (
    <div>
      <header>
        <h1>My Weather App</h1>
        <Weather city="Paris" />
      </header>
      <p>
        Coded by
        <a
          href="https://github.com/MegNia2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Megnia
        </a>
        on
        <a
          href="https://github.com/MegNia2/megnia-weather-project-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        , hosted on
        <a
          href="https://megnia-weather-project-react.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
