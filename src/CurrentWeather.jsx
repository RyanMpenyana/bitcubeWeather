import React from 'react'
import sunriseIcon from './assets/WeatherWhiteIcons/sunrise-white.png'
import sunsetIcon from './assets/WeatherWhiteIcons/sunset-white.png'
import sunnyIcon from './assets/WeatherWhiteIcons/clear.png'
import humidityIcon from './assets/WeatherWhiteIcons/humidity.png'
import windIcon from './assets/WeatherWhiteIcons/wind.png'
import pressureIcon from './assets/WeatherWhiteIcons/pressure-white.png'
import uvIcon from './assets/WeatherWhiteIcons/uv-white.png'
import { useContext } from 'react'
import { AppContext , ForecastContext} from './Context/Context'
const CurrentWeather = ({temperature, feelsLike, sunriseTime, sunsetTime, weatherDescription = 'des', Icon}) => {
    const forecastData = useContext(ForecastContext)
    const data = useContext(AppContext)
  return (
    <div className='flex flex-col items-center shadow-md py-5 px-5 bg mb-7 rounded-[30px] md:flex-row md:justify-center lg:w-[780px] lg:h-[330px] '>
        <div className='mb-4 lg:w-[204px] lg:text-left'>
             <div className='mb-5 bg-gradient-to-br  from-[rgba(255,255,255)] to-red bg-clip-text text-transparent'>
                 <h1 className='font-bold text-[40px] lg:text-[80px]'>{temperature}<span>°C</span></h1>
                 <p className='text-[16px]'>Feels like: <span className='text-xl'>{feelsLike}°C</span></p>
             </div>
             <div className='flex justify-between md:flex-col'>
                <div className='md:flex'>
                    <div className='md:w-7'>
                        <img src={sunriseIcon} alt="sunriseIcon" />
                    </div>
                    <div>
                        <h4 className='font-semibold lg:text-xl'>sunrise</h4>
                        <p>{sunriseTime}</p>
                    </div>
                </div>
                <div className='md:flex'>
                <div className='md:w-7'>
                        <img src={sunsetIcon} alt="sunriseIcon" />
                    </div>
                    <div>
                        <h4 className='font-semibold lg:text-xl'>sunset</h4>
                        <p>{sunsetTime}</p>
                    </div>
                </div>
             </div>
        </div>
        <div className='mb-6 lg:w-[270px] flex flex-col justify-center'>
            <div className='w-52 md:w-32 lg:w-full'>
                <img src={sunnyIcon} alt="weatherIcon" />       
            </div>
            <p>{weatherDescription}</p>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-[247px]'>
            <div className='flex flex-col items-center'>
                <div className='w-10  lg:w-[60px] md:w-7' >
                    <img src={humidityIcon} alt="humidIcon" />
                </div>
                <h4 className='font-semibold lg:text-xl'>{data && data.main.humidity}</h4>
                <p>Humidity</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 lg:w-[60px] md:w-7 '>
                    <img src={windIcon} alt="windIcon" />
                </div>
                <h4 className='font-semibold lg:text-xl'>{forecastData && forecastData.list[0].wind.speed}</h4>
                <p>Wind Speed</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 lg:w-[60px] md:w-7 '>
                    <img src={pressureIcon} alt="pressureIcon" />
                </div>
                <h4 className='font-semibold lg:text-xl'>{data && data.main.pressure}</h4>
                <p>Pressure</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 lg:w-[60px] md:w-7 '>
                    <img src={uvIcon} alt="uvIcon" />
                </div>
                <h4 className='font-semibold lg:text-xl'>{Math.floor(Math.random(1)*30)}</h4>
                <p>UV</p>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather