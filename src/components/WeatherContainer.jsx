import React from 'react'
import Location from './Location'
import CurrentWeather from './CurrentWeather'
import { useContext } from 'react'
import { AppContext , ForecastContext} from '../Context/Context'
const WeatherContainer = () => {
    const data = useContext(AppContext)
   
    const DateFormatter = () => {
        const date = new Date();
        const Hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const time = `${Hours}:${minutes}`;
        return time;
      };
  return (
    <div className="lg:flex mb-6 xl:flex lg:justify-center xl:gap-[55px]">
    <Location location={data && data.name} time={DateFormatter()} />
    <CurrentWeather
      temperature={data && parseInt(data.main.temp)}
      feelsLike={data && parseInt(data.main.feels_like)}
      sunriseTime={data && data.sys.sunrise}
      sunsetTime={data && data.sys.sunset}
      weatherDescription={data && data.weather[0].main}
    />
  </div>
  )
}

export default WeatherContainer;