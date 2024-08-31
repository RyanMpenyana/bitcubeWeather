import React from 'react'
import sunnyIcon from './assets/WeatherWhiteIcons/clear-sm.png'
import leftArrow from './assets/WeatherWhiteIcons/navigationLeft.png'
import straightArrow from './assets/WeatherWhiteIcons/navigation1.png'
import rightArrow from './assets/WeatherWhiteIcons/navigationRight.png'
const HourlyForecast = () => {
  return (
    <div className='items-center rounded-[30px] flex gap-2 flex-col shadow-md lg:h-[296px]  lg:w-full xl:w-[870px] xl:h-[366px]'>
        <h2 className='xl:font-bold xl:text-[32px] xl:mb-[19px]'>Hourly Forecast</h2>
       <div className='flex flex-wrap sm:flex-nowrap justify-center gap-3 items-center xl:gap-4'>
       <div className='flex flex-col w-24 items-center bg-dark xl:gap-1 xl:rounded-[40px] rounded-3xl xl:py-5 xl:w-32 xl:h-[270px] '>
           <h3 className='xl:font-bold text-2xl leading-9'>12:00</h3>
            <div className='xl:h-[111px]'>
                <img className='xl:w-20' src={sunnyIcon} alt="" />
            <h3 className='xl:font-bold xl:text-xl leading-8'>26°C</h3>
            </div>
            <img className='w-12' src={straightArrow} alt="" />
            <p className='xl:font-bold xl:text-xl'>3km/h</p>
        </div>
        <div className='bg-dark xl:gap-1 xl:rounded-[40px] rounded-3xl xl:w-32 xl:h-[270px] flex xl:py-5 flex-col items-center w-24'>
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
        </div>
       </div>
    </div>
  )
}

export default HourlyForecast