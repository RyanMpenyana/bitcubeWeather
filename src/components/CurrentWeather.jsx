import React from "react";
import sunriseIcon from "../assets/WeatherWhiteIcons/sunrise-white.png";
import sunsetIcon from "../assets/WeatherWhiteIcons/sunset-white.png";
import sunnyIcon from "../assets/WeatherWhiteIcons/clear.png";
import humidityIcon from "../assets/WeatherWhiteIcons/humidity.png";
import windIcon from "../assets/WeatherWhiteIcons/wind.png";
import pressureIcon from "../assets/WeatherWhiteIcons/pressure-white.png";
import uvIcon from "../assets/WeatherWhiteIcons/uv-white.png";
import { useContext } from "react";
import { AppContext, ForecastContext, ThemeContext } from "../Context/Context";
const CurrentWeather = ({ temperature, feelsLike, weatherDescription }) => {
  const forecastData = useContext(ForecastContext);
  const data = useContext(AppContext);
  const isDarkMode = useContext(ThemeContext);

  const timeStampConverter = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours().toLocaleString().padStart(2, "0");
    const minutes = date.getMinutes().toLocaleString().padStart(2, "0");
    return (time = `${hours} : ${minutes}`);
  };
  return (
    <div className="flex flex-col md:flex-row items-center shadow-md py-5 px-4 xl:px-6 mb-7 rounded-[30px] lg:flex-row md:justify-center xl:w-[780px] xl:h-[330px] ">
      {
        <>
          <div className=" xl:w-[204px] xl:text-left">
            <div className="mb-6">
              <div
                className={` bg-gradient-to-br  ${
                  isDarkMode
                    ? "from-black to-white "
                    : "from-[rgba(255,255,255)] to-red "
                } bg-clip-text text-transparent h-max xl:h-24`}
              >
                <h1 className="font-bold text-[40px] xl:text-[80px]">
                  {temperature}
                  <span>°C</span>
                </h1>
              </div>
              <p className="text-[16px]">
                Feels like: <span className="text-xl">{feelsLike}°C</span>
              </p>
            </div>
            <div className="flex xl:flex-col pl-9 gap-10 text-left xl:gap-3">
              <div className="xl:flex lg:text-left xl:gap-[10px]">
                <div className="lg:w-12">
                  <img src={sunriseIcon} alt="sunriseIcon" />
                </div>
                <div>
                  <h4 className="font-semibold xl:text-xl">sunrise</h4>
                  <p>{timeStampConverter(data && data.sys.sunrise)} am</p>
                </div>
              </div>
              <div className="xl:flex lg:text-left xl:gap-[10px]">
                <div className="w-12 h-12">
                  <img src={sunsetIcon} alt="sunriseIcon" />
                </div>
                <div>
                  <h4 className="font-semibold xl:text-xl">sunset</h4>
                  <p>{timeStampConverter(data && data.sys.sunset)} pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5  lg:mb-0 lg xl:w-[270px] flex flex-col relative bottom-0 justify-end">
            <div className=" flex justify-center items-end w-60  xl:w-full">
              <img
                src={`https://openweathermap.org/img/wn/${
                  data && data.weather[0].icon
                }@4x.png`}
                alt="weatherIcon"
              />
            </div>
            <p className="xl:text-[32px] xl:leading-[48px] text-3xl font-semibold">
              {weatherDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 xl:w-[247px]">
            <div className="flex flex-col items-center gap-2">
              <div className="h-[60px] w-[60px] md:w-8 md:h-9 lg:w-10  lg:h-10 xl:w-[60px] xl:h-[60px]">
                <img className="h-full" src={humidityIcon} alt="humidIcon" />
              </div>
              <h4 className="font-semibold xl:text-xl">
                {data && data.main.humidity}%
              </h4>
              <p>Humidity</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className=" md:w-8  lg:w-10  xl:w-[60px]  ">
                <img src={windIcon} alt="windIcon" />
              </div>
              <h4 className="font-semibold xl:text-xl">
                {forecastData && parseInt(forecastData.list[0].wind.speed)}km/h
              </h4>
              <p>Wind Speed</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className=" md:w-8 md:h-9 lg:w-10  xl:w-[60px] xl:h-[60px] ">
                <img src={pressureIcon} alt="pressureIcon" />
              </div>
              <h4 className="font-semibold xl:text-xl">
                {data && data.main.pressure}hPa
              </h4>
              <p>Pressure</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className=" md:w-8 md:h-9 lg:w-10  xl:w-[60px] xl:h-[60px]">
                <img src={uvIcon} alt="uvIcon" />
              </div>
              <h4 className="font-semibold xl:text-xl">
                {Math.floor(Math.random(1) * 30)}
              </h4>
              <p>UV</p>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default CurrentWeather;
