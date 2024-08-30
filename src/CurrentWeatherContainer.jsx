import React from 'react'
import Location from './Location'
import CurrentWeather from './CurrentWeather'
import { useContext } from 'react'
import { AppContext , ForecastContext} from './Context/Context'
const CurrentWeatherContainer = () => {
    const data = useContext(AppContext)
   
    const DateFormatter = (timeStamp) => {
        const date = new Date();
        const Hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const fulldate = date.getFullYear();
        const time = `${Hours}:${minutes}`;
        
        // const timeSt = date.toLocaleTimeString()
        
        
        return time;
      };
  return (
    <div className="md:flex md:justify-center md:gap-6">
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

export default CurrentWeatherContainer;