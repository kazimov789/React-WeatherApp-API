import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { AppUseContext, WeatherProvider } from "./context/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Search/>
        <Weather />
      </div>
    </WeatherProvider>
  );
}

export default App;
