import React from 'react'
import sunriseIcon from './assets/WeatherWhiteIcons/sunrise-white.png'
import sunsetIcon from './assets/WeatherWhiteIcons/sunset-white.png'
import sunnyIcon from './assets/WeatherWhiteIcons/clear.png'
import humidityIcon from './assets/WeatherWhiteIcons/humidity.png'
import windIcon from './assets/WeatherWhiteIcons/wind.png'
import pressureIcon from './assets/WeatherWhiteIcons/pressure-white.png'
import uvIcon from './assets/WeatherWhiteIcons/uv-white.png'
const CurrentWeather = () => {
  return (
    <div className='flex flex-col items-center shadow-md py-5 rounded-[30px]'>
        <div className='mb-4s'>
             <div className='mb-5'>
                 <h1 className='font-bold text-[40px]'>24°C</h1>
                 <p className='text-xl'>Feels like: <span className='text-[16px]'>25°C</span></p>
             </div>
             <div className='flex justify-between'>
                <div>
                    <img src={sunriseIcon} alt="sunriseIcon" />
                    <div>
                        <h4>sunrise</h4>
                        <p>6:00 AM</p>
                    </div>
                </div>
                <div>
                <img src={sunsetIcon} alt="sunsetIcon" />
                    <div>
                        <h4>sunrise</h4>
                        <p>6:00 AM</p>
                    </div>
                </div>
             </div>
        </div>
        <div className='mb-6'>
            <div className='w-52'>
                <img src={sunnyIcon} alt="weatherIcon" />       
            </div>
            <p>Weather description</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <div className='w-10 h-10'>
                    <img src={humidityIcon} alt="humidIcon" />
                </div>
                <h4>percentage</h4>
                <p>humid</p>
            </div>
            <div>
                <div className='w-10 h-10'>
                    <img src={windIcon} alt="windIcon" />
                </div>
                <h4>percentage</h4>
                <p>humid</p>
            </div>
            <div>
                <div className='w-10 h-10'>
                    <img src={pressureIcon} alt="pressureIcon" />
                </div>
                <h4>percentage</h4>
                <p>humid</p>
            </div>
            <div>
                <div className='w-10 h-10'>
                    <img src={uvIcon} alt="uvIcon" />
                </div>
                <h4>percentage</h4>
                <p>humid</p>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather