import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Queens" />
      </div>
      <br />
      <footer>
        This project is coded by Lanissa Davis,{" "}
        <a
          href="https://github.com/lalaanndee/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open sourced on Github,
        </a>{" "}
        {""}
        <a
          href="https://app.netlify.com/sites/phenomenal-tarsier-3b828d"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
