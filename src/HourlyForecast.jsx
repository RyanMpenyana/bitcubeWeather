import sunnyIcon from './assets/WeatherWhiteIcons/clear-sm.png'
import leftArrow from './assets/WeatherWhiteIcons/navigationLeft.png'
import straightArrow from './assets/WeatherWhiteIcons/navigation1.png'
import rightArrow from './assets/WeatherWhiteIcons/navigationRight.png'
import { ForecastContext, ThemeContext } from './Context/Context'
import { useContext, useState } from 'react'
const HourlyForecast = () => {
    const theme = useContext(ThemeContext)
    let hourlydata

    const data = useContext(ForecastContext)
        if(data){
            hourlydata = data.list.slice(0, 5)
        }
   
  return (
    <div className='items-center justify-center rounded-[30px] py-8 lg:py- flex gap-2 flex-col shadow-md lg:h-[296px]  lg:w-full xl:w-[870px] xl:h-[366px]'>
        <h2 className='font-bold lg:text-xl xl:text-[32px] xl:mb-[19px]'>Hourly Forecast:</h2>
       <div className='flex flex-wrap sm:flex-nowrap justify-center gap-3 items-center xl:gap-4'>
       {hourlydata &&
        hourlydata.map((item, index) => {
            return (
                <div key={index} className={`flex flex-col w-28 items-center ${!theme ?'bg-dark' : "[&>*:nth-child(-n + 3)]:bg-red"} xl:gap-1 xl:rounded-[40px] rounded-3xl xl:py-5 xl:w-32 xl:h-[270px]`}>
           <h3 className='xl:font-bold xl:text-2xl lg:text-lg font-bold leading-9'>{new Date(item.dt_txt).toLocaleTimeString().split(' ')[0]}</h3>
            <div className='xl:h-[111px]'>
                <img className='xl:w-20 lg:w-120'  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt="" />
                <h3 className='xl:font-bold xl:text-xl leading-8'>{parseInt(item.main.temp)}°C</h3>
            </div>
            <img className={`w-12 rotate-[${item.wind.deg}] `} src={straightArrow} alt="" />
            <p className='xl:font-bold xl:text-xl'>{parseInt(item.wind.speed)}km/h</p>
        </div>)})
       }
       </div>
    </div>
  )
}

export default HourlyForecast