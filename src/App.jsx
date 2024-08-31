import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { AppContext, ForecastContext } from "./Context/Context";
import WeatherContainer from "./WeatherContainer";
import ForecastContainer from "./ForecastContainer";


function App() {
  const [search, setSearch] = useState("Kirkuk");
  const [data, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

  const API_KEY = "c39dcb6fbf59d39634cb90bb49d9e560";


  useEffect(() => {
       try{
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search},&appid=${API_KEY}&units=metric`
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setWeatherData(data);
            });
       }catch(err){
            console.log(err)
       }
      
          try {
            fetch(
              `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}&units=metric`
            )
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                setForecastData(data);
                console.log(data);
              });
          } catch (e) {
            console.log(e);
          }

  },[])

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search)
  }
  return (
    <AppContext.Provider value={data}>
      <div className="App text-center text-white py-16 px-[20px] xl:px-5">
        <Header onClick={handleSearch} onChange={(e) => handleSearch(e)}/>
        <ForecastContext.Provider value={forecastData}>
          <WeatherContainer />
          <ForecastContainer />
        </ForecastContext.Provider>
      </div>
    </AppContext.Provider>
  );
}

export default App;
