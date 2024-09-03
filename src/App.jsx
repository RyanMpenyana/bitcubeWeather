import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { AppContext, ForecastContext, ThemeContext } from "./Context/Context";
import WeatherContainer from "./WeatherContainer";
import ForecastContainer from "./ForecastContainer";
export const API_KEY = "c39dcb6fbf59d39634cb90bb49d9e560";
// const API = process.env.API_KEY
// .(API)

function App() {
  const [search, setSearch] = useState("Cape Town");
  const [data, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [location, setLocation] = useState();     
  const [theme , setTheme ] = useState(false)  
  
  const themeHandler = () => {
        var element = document.getElementById('root');
        if(!theme){
            setTheme(true)
            element.style.backgroundImage = 'linear-gradient(to left top ,rgba(0, 0, 0, 0.979),rgba(27, 27, 27, 0.849) , rgba(27, 27, 27, 0.849)  )'
            element.style.color = 'white'
        }
        else {
            element.style.backgroundImage = 'linear-gradient(to left top ,rgba(0, 0, 0, 0.979) ,rgba(255, 255, 255, 1)   )'
            element.style.color = 'black'
            setTheme(false)
        }
  }
  
  
  const handleSearch = async () => {
    //geolocation data
    try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search},&limit=5&appid=${API_KEY}&units=metric`)
        const data = await response.json()
        const results = data.filter((item, index) => item)
        setLocation(results)
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
    themeHandler()
  }, []);

  return (
      <AppContext.Provider value={data}>
        <Header
          onSubmit={(e) => {
              e.preventDefault();
            handleSearch()
            setSearch('')
          }}
          onClick={handleSearch}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          handleTheme={themeHandler}
        />
        <ForecastContext.Provider value={forecastData}>
      <div className={`App text-center gap-4 ${theme ? 'text-white' : 'text-black'}  pb-16 h-full  px-[20px] xl:px-5`}>
        <ThemeContext.Provider value={theme}>
          <WeatherContainer />
          <ForecastContainer />
          </ThemeContext.Provider>
      </div>
        </ForecastContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
