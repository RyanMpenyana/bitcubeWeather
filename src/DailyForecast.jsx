import React from 'react'
import cloudIcon from './assets/WeatherWhiteIcons/clouds.png'
import { useContext } from 'react'
import { ForecastContext } from './Context/Context'

const DailyForecast = ({item}) => {
    const data = useContext(ForecastContext)
  return (
    <div className='flex flex-col px-6 py-8 mb-7 items-center rounded-[30px] shadow-md lg:w-2/5  xl:w-[414px] xl:py-2 lg:h-[296px] xl:h-[366px]'>
        <h2 className='font-bold xl:text-[32px] '>5 Days Forecast:</h2>
       <div className='lg:flex lg:gap-1 xl:gap-0 lg:flex-col'>
                <div className='flex xl:items-center xl:justify-between xl:w-[370px] '>
                <img className=' lg:w-8 xl:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>{''}°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div>
            <div className='flex xl:items-center xl:justify-between xl:w-[370px]  '>
                <img className=' lg:w-8 xl:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>20°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div>
            <div className='flex  xl:items-center xl:justify-between xl:w-[370px]  '>
                <img className=' lg:w-8 xl:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>20°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div>
            <div className='flex  xl:items-center xl:justify-between xl:w-[370px]  '>
                <img className=' lg:w-8 xl:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>20°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div>
            <div className='flex  xl:items-center xl:justify-between xl:w-[370px]  '>
                <img className=' lg:w-8 xl:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>20°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div> 
       </div>
       
    </div>
  )
}

export default DailyForecast


