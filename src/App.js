import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <br />
      <footer>
        <a
          href="https://github.com/lalaanndee/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Lanissa Davis
      </footer>
    </div>
  );
}

export default App;
