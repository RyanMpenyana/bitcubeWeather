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
    <div className='flex flex-col items-center shadow-md py-5 px-6 mb-7 rounded-[30px] lg:flex-row xl:justify-center xl:w-[780px] xl:h-[330px] '>
        <div className='mb-4 xl:w-[204px] xl:text-left'>
             <div className='mb-5 bg-gradient-to-br  from-[rgba(255,255,255)] to-red bg-clip-text text-transparent'>
                 <h1 className='font-bold text-[40px] xl:text-[80px]'>{temperature}<span>°C</span></h1>
                 <p className='text-[16px]'>Feels like: <span className='text-xl'>{feelsLike}°C</span></p>
             </div>
             <div className='flex justify-center xl:flex-col xl:items-center xl:gap-3'>
                <div className='xl:flex xl:gap-[10px]'>
                    <div className=''>
                        <img src={sunriseIcon} alt="sunriseIcon" />
                    </div>
                    <div>
                        <h4 className='font-semibold xl:text-xl'>sunrise</h4>
                        <p>{sunriseTime}</p>
                    </div>
                </div>
                <div className='xl:flex  xl:gap-[10px]'>
                <div className=''>
                        <img src={sunsetIcon} alt="sunriseIcon" />
                    </div>
                    <div>
                        <h4 className='font-semibold xl:text-xl'>sunset</h4>
                        <p>{sunsetTime}</p>
                    </div>
                </div>
             </div>
        </div>
        <div className='mb-6 xl:w-[270px] flex flex-col justify-center'>
            <div className='w-52  xl:w-full'>
                <img src={sunnyIcon} alt="weatherIcon" />       
            </div>
            <p className='xl:text-[32px] xl:leading-[48px] xl:font-semibold'>{weatherDescription}</p>
        </div>
        <div className='grid grid-cols-2 gap-4 xl:w-[247px]'>
            <div className='flex flex-col items-center gap-2'>
                <div className='w-10  xl:w-[60px] xl:h-[60px]' >
                    <img src={humidityIcon} alt="humidIcon" />
                </div>
                <h4 className='font-semibold xl:text-xl'>{data && data.main.humidity}</h4>
                <p>Humidity</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='w-10 xl:w-[60px]  '>
                    <img src={windIcon} alt="windIcon" />
                </div>
                <h4 className='font-semibold xl:text-xl'>{forecastData && forecastData.list[0].wind.speed}</h4>
                <p>Wind Speed</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='w-10 xl:w-[60px] xl:h-[60px] '>
                    <img src={pressureIcon} alt="pressureIcon" />
                </div>
                <h4 className='font-semibold xl:text-xl'>{data && data.main.pressure}</h4>
                <p>Pressure</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='w-10 xl:w-[60px] xl:h-[60px]'>
                    <img src={uvIcon} alt="uvIcon" />
                </div>
                <h4 className='font-semibold xl:text-xl'>{Math.floor(Math.random(1)*30)}</h4>
                <p>UV</p>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather