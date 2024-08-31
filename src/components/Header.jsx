import React from 'react'
import Input from './Input'
import currentLocationIcon from '../assets/WeatherWhiteIcons/currentlocationIcon.png'
import { useContext } from 'react'
import { AppContext } from '../Context/Context'
const Header = (props) => {
    const data = useContext(AppContext)
  return (
    <div className='flex items-center justify-between xl:mb-[49px] xl:px-[77px]'>
    <div className=''>
    <div className='xl:w-[100px] bg-[#D9D9D9] xl:rounded-[40px] py-1 px-[10px]'>
            <div className='w-full'>
                <div className='bg-black h-[30px] w-[30px] rounded-full'></div>
            </div>
        </div>
            <h4 className='xl:font-extrabold xl:text-lg'>
                Dark mode
            </h4>
    </div>
        <div>
            <Input onChange={props.onChange} onClick={props.onClick}/>
        </div>
        <div className='flex items-center xl:h-[62px]'>
            <button className='flex items-center bg-light xl:rounded-[40px] h-full xl:px-7 xl:py-4'><span><img src={currentLocationIcon} alt="currentLocationIcon" /></span>Current Location</button>
        </div>
    </div>
  )
}

export default Header