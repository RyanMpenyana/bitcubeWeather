import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { AppContext, ForecastContext, ThemeContext } from "./Context/Context";
import WeatherContainer from "./components/WeatherContainer";
import ForecastContainer from "./components/ForecastContainer";
import { API_KEY } from "./public/API";

function App() {
  const [search, setSearch] = useState("Cape Town");
  const [data, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const MSRefreshTime = 300000;
  const themeHandler = () => {
    var element = document.getElementById("root");
    if (isDarkMode) {
      element.style.backgroundImage =
        "linear-gradient(to left top ,rgba(0, 0, 0, 0.979),rgba(27, 27, 27, 0.849) , rgba(27, 27, 27, 0.849)  )";
      element.style.color = "white";
      setIsDarkMode(false);
    } else {
      element.style.backgroundImage =
        "linear-gradient(to left top ,rgba(0, 0, 0, 0.979) ,rgba(255, 255, 255, 1)   )";
      element.style.color = "black";
      setIsDarkMode(true);
    }
  };

  const handleSearch = async () => {
    //current weather Data for searched location.
    getCurrentWeather();
  };

  const getCurrentWeather = async (location) => {
    //current weather Data
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          location ? location : search
        }&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      if (data.cod != "404") {
        setWeatherData(data);
      } else {
        setErrorMessage("City not found");
      }
    } catch (e) {
      console.log(e);
    }
    // getting data for hourly forecast
    getForecastWeatherData();
  };

  const getInitialWeatherData = async () => {
    //Forecast data
    getForecastWeatherData();
  };

  const getForecastWeatherData = async (location) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          location ? location : search
        }&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      //handling if place not found;
      if (data.cod != "404") {
        setForecastData(data);
      } else {
        setErrorMessage("City not found");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const loadDefaultTheme = () => {
    var element = document.getElementById("root");
    element.style.backgroundImage =
      "linear-gradient(to left top ,rgba(0, 0, 0, 0.979),rgba(27, 27, 27, 0.849) , rgba(27, 27, 27, 0.849)  )";
    element.style.color = "white";
  };

  useEffect(() => {
    getInitialWeatherData();
    getCurrentWeather();
    handleSearch();
    loadDefaultTheme();
    // Refreshing weather data every 5 minutes
    let currentWeatherInterval = setInterval(
      () => getCurrentWeather(localStorage.getItem("currentLocation")),
      MSRefreshTime
    );
    let forecastWeatherInterval = setInterval(
      () => getForecastWeatherData(localStorage.getItem("currentLocation")),
      MSRefreshTime
    );

    return () => {
      clearInterval(currentWeatherInterval);
      clearInterval(forecastWeatherInterval);
    };
  }, []);

  return (
    data && (
      <AppContext.Provider value={data}>
        <Header
          onSubmit={(e) => {
            if (search.length > 0) {
              e.preventDefault();
              handleSearch();
              setSearch("");
            } else {
              alert("Please provide valid input");
            }
          }}
          onClick={handleSearch}
          onChange={(e) => {
            const searchTerm = e.target.value;
            setSearch(searchTerm);
            localStorage.setItem("currentLocation", searchTerm);
          }}
          value={search}
          handleTheme={themeHandler}
        />
        {!errorMessage && (
          <ForecastContext.Provider value={forecastData}>
            <div
              className={`App text-center gap-4 ${
                isDarkMode ? "text-black" : "text-white"
              }  pb-16 h-full  px-[20px] xl:px-5`}
            >
              <ThemeContext.Provider value={isDarkMode}>
                <WeatherContainer />
                <ForecastContainer />
              </ThemeContext.Provider>
            </div>
          </ForecastContext.Provider>
        )}
      </AppContext.Provider>
    )
  );
}

export default App;
