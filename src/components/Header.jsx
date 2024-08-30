import React from 'react'
import Input from './Input'
import currentLocationIcon from '../assets/WeatherWhiteIcons/currentlocationIcon.png'
import { useContext } from 'react'
import { AppContext } from '../Context/Context'
const Header = (props) => {
    const data = useContext(AppContext)
  return (
    <div className='flex items-center justify-between lg:mb-[49px] lg:px-[77px]'>
    <div className=''>
    <div className='md:w-[100px] bg-[#D9D9D9] lg:rounded-[40px] py-1 px-[10px]'>
            <div className='w-full'>
                <div className='bg-black h-[30px] w-[30px] rounded-full'></div>
            </div>
        </div>
            <h4 className='lg:font-extrabold lg:text-lg'>
                Dark mode
            </h4>
    </div>
        <div>
            <Input onChange={props.onChange} onClick={props.onClick}/>
        </div>
        <div className='flex items-center lg:h-[62px]'>
            <button className='flex items-center bg-light lg:rounded-[40px] h-full lg:px-7 lg:py-4'><span><img src={currentLocationIcon} alt="currentLocationIcon" /></span>Current Location</button>
        </div>
    </div>
  )
}

export default Header