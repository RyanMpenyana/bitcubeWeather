import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { AppContext, ForecastContext } from "./Context/Context";
import WeatherContainer from "./WeatherContainer";
import ForecastContainer from "./ForecastContainer";
export const API_KEY = "c39dcb6fbf59d39634cb90bb49d9e560";

function App() {
  const [search, setSearch] = useState("Cape Town");
  const [data, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [location, setLocation] = useState();       
  
  const handleSearch = async () => {
    //geolocation data
    try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search},&limit=5&appid=${API_KEY}`)
        const data = await response.json()
        const results = data.filter((item, index) => console.log(item))
        setLocation(results)
        console.log(location)
    }catch(err){
        console.log(err)
    }
    //current weather Data
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`)
        const data = await response.json()
        setWeatherData(data)
        } catch(e){
            console.log(e)
        }       
  
    //Forecast data
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}&units=metric`)
      const data = await response.json()
      setForecastData(data)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <AppContext.Provider value={data}>
        <Header
          onClick={handleSearch}
          onChange={(e) => setSearch(e.target.value)}
          options={location && location}
        />
      <div className="App text-center  text-white pb-16 h-full  px-[20px] xl:px-5">
        <ForecastContext.Provider value={forecastData}>
          <WeatherContainer />
          <ForecastContainer />
        </ForecastContext.Provider>
      </div>
    </AppContext.Provider>
  );
}

export default App;
