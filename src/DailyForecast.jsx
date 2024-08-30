import React from 'react'
import cloudIcon from './assets/WeatherWhiteIcons/clouds.png'
import { useContext } from 'react'
import { ForecastContext } from './Context/Context'

const DailyForecast = ({item}) => {
    const data = useContext(ForecastContext)
    for (let j in data){
        console.log(data['list'].map(item => {
            return item['dt_txt']
        }))
    }
  return (
    <div className='flex flex-col px-6 py-8 mb-7 items-center rounded-[30px] shadow-md md:w-[250px] md:h-[250px] lg:w-[414px] lg:py-2 lg:h-[366px]'>
        <h2 className='font-bold md:text-[18px] lg:text-[32px] '>5 Days Forecast:</h2>
       <div className='md:gap-2 md:flex-col'>
                <div className='flex md:w-[200px] md:items-center md:justify-between lg:w-[370px]'>
                <img className='md:w-8 lg:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>{''}°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div>
            <div className='flex md:w-[200px] md:items-center md:justify-between lg:w-[370px] '>
                <img className='md:w-8 lg:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>20°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div>
            <div className='flex md:w-[200px] md:items-center md:justify-between lg:w-[370px] '>
                <img className='md:w-8 lg:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>20°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div>
            <div className='flex md:w-[200px] md:items-center md:justify-between lg:w-[370px] '>
                <img className='md:w-8 lg:w-[60px]' src={cloudIcon} alt="" />
                <p className='text-2xl font-semibold'>20°C</p>
                <div className='w-[163px]'>
                    <p>Saturday, 2 Sep</p>
                </div>
            </div>
            <div className='flex md:w-[200px] md:items-center md:justify-between lg:w-[370px] '>
                <img className='md:w-8 lg:w-[60px]' src={cloudIcon} alt="" />
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


