import React from 'react'
import cloudIcon from './assets/WeatherWhiteIcons/clouds.png'
import { useContext } from 'react'
import { ForecastContext } from './Context/Context'

const DailyForecast = ({item}) => {
    const data = useContext(ForecastContext);
    let dailyWeatherData = [];
    if(data) {
        let currentTimeStamp;
        let today = new Date().toLocaleDateString();
        for(let i = 0; i < data.list.length; i++ ) {
            let item = data.list[i];
            let dt_txt = item.dt_txt.split(" ")[0];
            if(currentTimeStamp != dt_txt && today != new Date(dt_txt).toLocaleDateString()) {
                currentTimeStamp = dt_txt;
                dailyWeatherData.push(item);
            }
        }
    }
  return (
    <div className='flex flex-col px-6 py-4 mb-7 items-center  rounded-[30px] shadow-md lg:w-2/5  xl:w-[414px] xl:py-2 lg:h-[296px] xl:h-[366px]'>
        <h2 className='font-bold lg:text-xl xl:text-[32px] '>5 Days Forecast:</h2>
       <div className='lg:flex  lg:gap-4 xl:gap-0 lg:flex-col justify-center'>

            {
                dailyWeatherData.length ? 
                    dailyWeatherData.map(item => {
                        return (<div className='flex items-center xl:justify-between xl:w-[370px] '>
                            <img className=' lg:w-8 xl:w-[60px]'src={`https://openweathermap.org/img/wn/${item &&  item.weather[0].icon}@2x.png`} alt="" />
                            <p className='text-2xl font-semibold'>{parseInt(item.main.temp)}°C</p>
                            <div className='w-[163px]'>
                                <p>{new Date(item.dt_txt).toDateString()}</p>
                            </div>
                        </div>)
                    }) : <h1>Fetching data please wait....</h1>
            }
       </div>
       
    </div>
  )
}

export default DailyForecast





