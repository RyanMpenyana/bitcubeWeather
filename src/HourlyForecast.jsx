import sunnyIcon from './assets/WeatherWhiteIcons/clear-sm.png'
import leftArrow from './assets/WeatherWhiteIcons/navigationLeft.png'
import straightArrow from './assets/WeatherWhiteIcons/navigation1.png'
import rightArrow from './assets/WeatherWhiteIcons/navigationRight.png'
import { ForecastContext } from './Context/Context'
import { useContext, useState } from 'react'
const HourlyForecast = () => {
    let hourlydata

    const data = useContext(ForecastContext)
        if(data){
            hourlydata = data.list.slice(0, 5)
        }
   
  return (
    <div className='items-center justify-center rounded-[30px] py-8 lg:p-0 flex gap-2 flex-col shadow-md lg:h-[296px]  lg:w-full xl:w-[870px] xl:h-[366px]'>
        <h2 className='font-bold lg:text-xl xl:text-[32px] xl:mb-[19px]'>Hourly Forecast</h2>
       <div className='flex flex-wrap sm:flex-nowrap justify-center gap-3 items-center xl:gap-4'>
       {hourlydata &&
        hourlydata.map((item, index) => {
            return (
                <div className='flex flex-col w-24 items-center bg-dark xl:gap-1 xl:rounded-[40px] rounded-3xl xl:py-5 xl:w-32 xl:h-[270px] '>
           <h3 className='xl:font-bold text-2xl leading-9'>{new Date(item.dt_txt).toLocaleTimeString().split(' ')[0]}</h3>
            <div className='xl:h-[111px]'>
                <img className='xl:w-20'  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt="" />
                <h3 className='xl:font-bold xl:text-xl leading-8'>{parseInt(item.main.temp)}°C</h3>
            </div>
            <img className='w-12' src={straightArrow} alt="" />
            <p className='xl:font-bold xl:text-xl'>{parseInt(item.wind.speed)}km/h</p>
        </div>)})
       }
        {/* <div className='bg-dark xl:gap-1 xl:rounded-[40px] rounded-3xl xl:w-32 xl:h-[270px] flex xl:py-5 flex-col items-center w-24'>
            <h3 className='xl:font-bold text-2xl leading-9'>12:00</h3>
            <div className='xl:h-[111px]'>
                <img className='xl:w-20' src={sunnyIcon} alt="" />
            <h3 className='xl:font-bold xl:text-xl leading-8'>26°C</h3>
            </div>
            <img  className='w-12' src={leftArrow} alt="" />
            <p className='xl:font-bold xl:text-xl'>3km/h</p>
        </div>
        <div className='bg-dark xl:gap-1 xl:rounded-[40px] rounded-3xl xl:w-32 xl:h-[270px] flex xl:py-5 flex-col items-center w-24'>
            <h3 className='xl:font-bold text-2xl leading-9'>12:00</h3>
            <div className='xl:h-[111px]'>
                <img className='xl:w-20' src={sunnyIcon} alt="" />
            <h3 className='xl:font-bold xl:text-xl leading-8'>26°C</h3>
            </div>
            <img  className='w-12' src={straightArrow} alt="" />
            <p className='xl:font-bold xl:text-xl'>3km/h</p>
        </div>
        <div className='bg-dark xl:gap-1 xl:rounded-[40px] rounded-3xl xl:w-32 xl:h-[270px] flex xl:py-5 flex-col items-center w-24'>
            <h3 className='xl:font-bold text-2xl leading-9'>12:00</h3>
            <div className='xl:h-[111px]'>
                <img className='xl:w-20' src={sunnyIcon} alt="" />
            <h3 className='xl:font-bold xl:text-xl leading-8'>26°C</h3>
            </div>
            <img  className='w-12' src={rightArrow} alt="" />
            <p className='xl:font-bold xl:text-xl'>3km/h</p>
        </div>
        <div className='bg-dark xl:gap-1 xl:rounded-[40px] rounded-3xl xl:w-32 xl:h-[270px] flex xl:py-5 flex-col items-center w-24'>
            <h3 className='xl:font-bold text-2xl leading-9'>12:00</h3>
            <div className='xl:h-[111px]'>
                <img className='xl:w-20' src={sunnyIcon} alt="" />
            <h3 className='xl:font-bold xl:text-xl leading-8'>26°C</h3>
            </div>
            <img className='w-12' src={straightArrow} alt="" />
            <p className='xl:font-bold xl:text-xl'>3km/h</p>
        </div> */}
       </div>
    </div>
  )
}

export default HourlyForecast