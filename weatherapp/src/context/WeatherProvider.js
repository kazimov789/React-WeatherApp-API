import React from "react";
import axios from "axios";

const AppContext = React.createContext([]);

function WeatherProvider({ children }) {
  const [city, SetCity] = React.useState();
  const [search, SetSearch] = React.useState("Baku");

  React.useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json?key=56b25a787f6f4e4e90372918232805&q=${search}&days=7&aqi=no&alerts=no`)
      .then((res) => SetCity(res.data))
      .catch((err) => console.log(err));
  }, [search]);

  
  return (
      <>
      <AppContext.Provider value={{ city, SetCity, search, SetSearch }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

 const useWeatherContext =  () =>{
    const context = React.useContext(AppContext);
    return context;
  };


export { WeatherProvider, useWeatherContext };
