import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Search />
        <br />
        <a
          href="https://github.com/lalaanndee/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Lanissa Davis
      </header>
    </div>
  );
}

export default App;
