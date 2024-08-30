import React from 'react'
import searchIcon from '../assets/WeatherWhiteIcons/search.png'
import { AppContext } from '../Context/Context'
const Input = (props) => {

  return (
    <div className='flex justify-center items-center shadow-sm lg:w-[803px] lg:h-[62px] rounded-[40px] lg:px-[33px] lg:gap-[29px]'>
        <div onClick={props.onClick} className='w-4 lg:w-11'>
            <img src={searchIcon} alt="searchIcon" />
        </div>
    <input className='bg-transparent w-full outline-none h-full' type='text' placeholder='Search for your preferred city...' onChange={props.onChange} />
</div>

  )
}

export default Input