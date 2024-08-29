import React from 'react'
import cloudIcon from './assets/WeatherWhiteIcons/clouds.png'

const DailyForecast = () => {
  return (
    <div className='flex flex-col items-center rounded-[30px] shadow-md'>
        <h2>5 Days Forecast:</h2>
        <div>
            <img src={cloudIcon} alt="" />
            <p>High: 75</p>
            <p>date</p>
        </div>
    </div>
  )
}

export default DailyForecast