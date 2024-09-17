import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Weather App</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
