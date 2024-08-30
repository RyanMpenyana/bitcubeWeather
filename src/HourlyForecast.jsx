import React from 'react'
import sunnyIcon from './assets/WeatherWhiteIcons/clear-sm.png'
import leftArrow from './assets/WeatherWhiteIcons/navigationLeft.png'
import straightArrow from './assets/WeatherWhiteIcons/navigation1.png'
import rightArrow from './assets/WeatherWhiteIcons/navigationRight.png'
const HourlyForecast = () => {
  return (
    <div className='items-center rounded-[30px] flex md:flex-col shadow-md md:w-[400px]  md:h-[250px] lg:w-[870px] lg:h-[366px]'>
        <h2 className='lg:font-bold lg:text-[32px] lg:mb-[19px]'>Hourly Forecast</h2>
       <div className='flex justify-center items-center md:gap-4'>
       <div className='flex flex-col items-center bg-dark rounded-3xl lg:py-3 lg:w-32 lg:h-[270px] '>
            <h3 className='lg:font-bold text-2xl leading-9'>12:00</h3>
            <div className='lg:h-[111px]'>
                <img className='lg:w-20' src={sunnyIcon} alt="" />
            <h3 className='lg:font-bold lg:text-xl leading-8'>26°C</h3>
            </div>
            <img className='w-12' src={straightArrow} alt="" />
            <p className='lg:font-bold lg:text-xl'>3KM/H</p>
        </div>
        <div className='bg-dark rounded-3xl lg:w-32 lg:h-[270px] flex lg:py-3 flex-col items-center '>
            <h3 className='lg:font-bold text-2xl leading-9'>12:00</h3>
            <div className='lg:h-[111px]'>
                <img className='lg:w-20' src={sunnyIcon} alt="" />
            <h3 className='lg:font-bold lg:text-xl leading-8'>26°C</h3>
            </div>
            <img  className='w-12' src={leftArrow} alt="" />
            <p className='lg:font-bold lg:text-xl'>3KM/H</p>
        </div>
        <div className='bg-dark rounded-3xl lg:w-32 lg:h-[270px] flex lg:py-3 flex-col items-center '>
            <h3 className='lg:font-bold text-2xl leading-9'>12:00</h3>
            <div className='lg:h-[111px]'>
                <img className='lg:w-20' src={sunnyIcon} alt="" />
            <h3 className='lg:font-bold lg:text-xl leading-8'>26°C</h3>
            </div>
            <img  className='w-12' src={straightArrow} alt="" />
            <p className='lg:font-bold lg:text-xl'>3KM/H</p>
        </div>
        <div className='bg-dark rounded-3xl lg:w-32 lg:h-[270px] flex lg:py-3 flex-col items-center '>
            <h3 className='lg:font-bold text-2xl leading-9'>12:00</h3>
            <div className='lg:h-[111px]'>
                <img className='lg:w-20' src={sunnyIcon} alt="" />
            <h3 className='lg:font-bold lg:text-xl leading-8'>26°C</h3>
            </div>
            <img  className='w-12' src={rightArrow} alt="" />
            <p className='lg:font-bold lg:text-xl'>3KM/H</p>
        </div>
        <div className='bg-dark rounded-3xl lg:w-32 lg:h-[270px] flex lg:py-3 flex-col items-center '>
            <h3 className='lg:font-bold text-2xl leading-9'>12:00</h3>
            <div className='lg:h-[111px]'>
                <img className='lg:w-20' src={sunnyIcon} alt="" />
            <h3 className='lg:font-bold lg:text-xl leading-8'>26°C</h3>
            </div>
            <img className='w-12' src={straightArrow} alt="" />
            <p className='lg:font-bold lg:text-xl'>3KM/H</p>
        </div>
       </div>
    </div>
  )
}

export default HourlyForecast